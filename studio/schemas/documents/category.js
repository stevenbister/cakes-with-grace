import { RiBookMarkLine } from 'react-icons/ri';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: RiBookMarkLine,
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
      name: 'featureImage',
      title: 'Feature image',
      type: 'mainImage',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featureImage',
    },
  },
};
