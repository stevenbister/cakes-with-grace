export default {
  name: 'mainImage',
  title: 'Main Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alternativeText',
      title: 'Alternative text',
      description: 'Describe the image so people who have sight difficulties can hear a description instead.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      type: 'string',
      options: {
        // Stop this field being hidden behind the edit button
        isHighlighted: true,
      },
    },
  ],
};
