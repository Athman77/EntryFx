export default {
    title: 'Order Item',
    name: 'imageObject',
    type: 'object',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Images',
        type: 'array',
       
      
    
        of: [{ type: 'image' }]
      },
      {
        title: 'quantity',
        name: 'quantity',
        type: 'number',
      },
      
      {
        title: 'price',
        name: 'price',
        type: 'number',
      },
    ],
  };