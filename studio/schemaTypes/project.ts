import { defineField, defineType } from 'sanity';

const altField = defineField({ name: 'alt', title: 'Alt text', type: 'string', description: 'Describe the image for screen readers.' });

export const project = defineType({
  name: 'project',
  title: 'Case study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers show first. The first three appear on /work.' }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'role', title: 'My role', type: 'string' }),
    defineField({ name: 'summary', type: 'string', description: 'One line on the project.' }),
    defineField({ name: 'challenge', type: 'text', rows: 4 }),
    defineField({ name: 'whatIDid', title: 'What I did', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'result', type: 'string' }),
    defineField({ name: 'tags', title: 'Stack / tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'liveUrl', title: 'Live link', type: 'url' }),
    defineField({ name: 'cover', type: 'image', options: { hotspot: true }, fields: [altField] }),
    defineField({ name: 'screenshots', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [altField] }] }),
  ],
  orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'client', media: 'cover' } },
});
