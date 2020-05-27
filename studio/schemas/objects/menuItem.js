export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    {
      name: 'menuItemName',
      title: 'Menu Item Name',
      type: 'string',
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }, { type: 'recipe' }, { type: 'category' }],
    },
    {
      name: 'customSlug',
      title: 'Custom Slug',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.menuItemName,
        maxLength: 96,
        // TODO: Need to test this slugify function further
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 96),
      },
    },
  ],
};
