import { RiCake3Line } from 'react-icons/ri';
import category from './category';

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: RiCake3Line,
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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

  preview: {
    select: {
      title: 'title',
      // ? Wonder if there's a way to loop over this better? Doesn't seem to be rn
      originalNumberOfCategories: 'categories.length',
      // We need to grab the two items we want out here so that sanity can correctly identify the title field
      category0: 'categories.0.title',
      category1: 'categories.1.title',
      media: 'mainImage',
    },
    prepare({
      title,
      originalNumberOfCategories,
      category0,
      category1,
      media,
    }) {
      // Lets put the defined categories into their own array so we can count them later
      const categoriesArray = [category0, category1];
      let subtitle =
        originalNumberOfCategories > 1
          ? categoriesArray.join(' and ')
          : categoriesArray.join('');

      if (originalNumberOfCategories > categoriesArray.length) {
        const difference = originalNumberOfCategories - categoriesArray.length;
        subtitle = `${categoriesArray.join(', ')} and ${difference} more`;
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
