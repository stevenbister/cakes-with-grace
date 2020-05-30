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
      name: 'featureImage',
      title: 'Feature image',
      type: 'mainImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
