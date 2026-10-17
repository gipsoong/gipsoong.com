import { defineField, defineType } from 'sanity';

export const photoSet = defineType({
  name: 'photoSet',
  title: 'Photo set',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers show first.' }),
    defineField({ name: 'blurb', type: 'string' }),
    defineField({
      name: 'tint',
      title: 'Accent colour',
      type: 'string',
      options: { list: ['green', 'red', 'blue', 'pink', 'yellow'], layout: 'radio', direction: 'horizontal' },
    }),
    defineField({ name: 'cover', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'string' }] }),
    defineField({
      name: 'photos',
      type: 'array',
      options: { layout: 'grid' },
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', title: 'Alt text', type: 'string' },
          { name: 'caption', type: 'string' },
        ],
      }],
    }),
  ],
  orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'blurb', media: 'cover' } },
});
