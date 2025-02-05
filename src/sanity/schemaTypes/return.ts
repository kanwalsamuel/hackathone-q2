export const returns = {
    name: 'return',
    title: 'Return',
    type: 'document',
    fields: [
      {
        name: 'returnId',
        title: 'Return ID',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],  // Reference to the order document
        validation: Rule => Rule.required()
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],  // Reference to the user who initiated the return
        validation: Rule => Rule.required()
      },
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],  // Reference to the product being returned
        validation: Rule => Rule.required()
      },
      {
        name: 'returnReason',
        title: 'Return Reason',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'status',
        title: 'Return Status',
        type: 'string',
        options: {
          list: ['Pending', 'Approved', 'Rejected'],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'returnDate',
        title: 'Return Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      }
    ]
  };
  