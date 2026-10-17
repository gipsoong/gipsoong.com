import type { Project, PhotoSet } from '../lib/content';

// Used whenever SANITY_PROJECT_ID is not set, so the site always builds.
export const placeholderProjects: Project[] = [1, 2, 3].map((n) => ({
  title: `Project ${['One', 'Two', 'Three'][n - 1]}`,
  slug: `project-${n}`,
  client: '[PLACEHOLDER] Client',
  year: n === 3 ? 2024 : 2025,
  role: '[PLACEHOLDER] Development lead, go-live',
  summary: '[PLACEHOLDER] One line on what the project was.',
  challenge: '[PLACEHOLDER] A short paragraph on the problem and constraints.',
  whatIDid: ['[PLACEHOLDER] Planned the migration', '[PLACEHOLDER] Led QA and UAT', '[PLACEHOLDER] Ran go-live and handover'],
  result: '[PLACEHOLDER] One line on the outcome.',
  tags: [['migration', 'go-live'], ['build', 'QA'], ['handover', 'training']][n - 1],
  liveUrl: null,
  cover: null,
  screenshots: [],
}));

export const placeholderSets: PhotoSet[] = ['Street', 'Travel', 'Cats'].map((title, i) => ({
  title,
  slug: title.toLowerCase(),
  blurb: '[PLACEHOLDER] A line about this set.',
  cover: null,
  photos: Array.from({ length: 6 }, () => ({ image: null, caption: null })),
  tint: ['green', 'blue', 'pink'][i],
}));
