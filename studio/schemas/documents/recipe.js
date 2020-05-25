export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'timings',
      title: 'Timings',
      type: 'timings',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'ingredient' }],
    },
    {
      name: 'method',
      title: 'Method',
      type: 'blockContent',
    },
  ],
};
