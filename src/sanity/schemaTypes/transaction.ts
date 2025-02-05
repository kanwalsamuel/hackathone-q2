export const transaction ={
    name: 'transaction',
    title: 'Transaction',
    type: 'document',
    fields: [
      {
        name: 'transactionId',
        title: 'Transaction ID',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],  // Assuming you have a "user" schema
        validation: Rule => Rule.required()
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['Pending', 'Completed', 'Failed'],
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'transactionDate',
        title: 'Transaction Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      }
    ]
  };
  