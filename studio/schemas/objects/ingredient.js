export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'measurement',
      title: 'Measurement',
      type: 'string',
      options: {
        list: [{ title: 'g', value: 'g' }, { title: 'tbsp', value: 'tbsp' }, { title: 'tsp', value: 'tsp' }],
      },
    },
  ],
};
