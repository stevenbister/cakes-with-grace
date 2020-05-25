export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // This restricts users to only being able to update and publish this document type
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
  ],
};
