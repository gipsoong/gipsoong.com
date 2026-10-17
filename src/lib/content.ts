import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { placeholderProjects, placeholderSets } from '../data/placeholders';

export type SanityImage = { asset: { _ref: string }; alt?: string } | null;
export type Project = {
  title: string; slug: string; client: string; year: number; role: string; summary: string;
  challenge: string; whatIDid: string[]; result: string; tags: string[]; liveUrl: string | null;
  cover: SanityImage; screenshots: NonNullable<SanityImage>[];
};
export type PhotoSet = {
  title: string; slug: string; blurb: string; cover: SanityImage;
  photos: { image: SanityImage; caption: string | null }[]; tint?: string;
};

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

// Content is read once at build time; publishing in the studio triggers a rebuild.
const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-09-01', useCdn: false })
  : null;
const builder = client ? createImageUrlBuilder(client) : null;

export function img(source: SanityImage, width: number) {
  if (!source || !builder) return null;
  return builder.image(source).width(width).auto('format').quality(80).url();
}

const projectFields = `title, "slug": slug.current, client, year, role, summary, challenge, whatIDid, result, tags, liveUrl, cover, screenshots`;

export async function getProjects(): Promise<Project[]> {
  if (!client) return placeholderProjects;
  const rows: Partial<Project>[] = await client.fetch(`*[_type == "project" && defined(slug.current)] | order(order asc, year desc) { ${projectFields} }`);
  // Studio fields are optional, so a half-filled case study must not break the build.
  return rows.map((p) => ({
    ...p,
    title: p.title ?? '',
    slug: p.slug ?? '',
    client: p.client ?? '',
    year: p.year ?? new Date().getFullYear(),
    role: p.role ?? '',
    summary: p.summary ?? '',
    challenge: p.challenge ?? '',
    whatIDid: p.whatIDid ?? [],
    result: p.result ?? '',
    tags: p.tags ?? [],
    liveUrl: p.liveUrl ?? null,
    cover: p.cover ?? null,
    screenshots: p.screenshots ?? [],
  }));
}

export async function getPhotoSets(): Promise<PhotoSet[]> {
  if (!client) return placeholderSets;
  const rows: Partial<PhotoSet>[] = await client.fetch(`*[_type == "photoSet" && defined(slug.current)] | order(order asc) { title, "slug": slug.current, blurb, cover, tint, photos[] { "image": @, caption } }`);
  return rows.map((s) => ({ ...s, title: s.title ?? '', slug: s.slug ?? '', blurb: s.blurb ?? '', cover: s.cover ?? null, photos: s.photos ?? [] }));
}
