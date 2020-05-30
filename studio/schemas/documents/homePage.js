export default {
  name: 'homePage',
  type: 'document',
  title: 'Homepage',
  // This restricts users to only being able to update and publish this document type
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
};
