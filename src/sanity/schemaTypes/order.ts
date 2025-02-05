export const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "orderId",
      type: "string",
      title: "Order ID",
    },
    {
      name: "customer",
      type: "object",
      title: "Customer Details",
      fields: [
        { name: "name", type: "string", title: "Customer Name" },
        { name: "email", type: "string", title: "Customer Email" },
        { name: "phone", type: "string", title: "Customer Phone" },
      ],
    },
    {
      name: "shippingAddress",
      type: "object",
      title: "Shipping Address",
      fields: [
        { name: "name", type: "string", title: "Receiver Name" },
        { name: "address", type: "string", title: "Address" },
        { name: "city", type: "string", title: "City" },
        { name: "postalCode", type: "string", title: "Postal Code" },
        { name: "country", type: "string", title: "Country" },
      ],
    },
    {
      name: "items",
      type: "array",
      title: "Order Items",
      of: [
        {
          type: "object",
          fields: [
            { name: "product", type: "reference", to: [{ type: "product" }] },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "price", type: "number", title: "Price" },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      type: "number",
      title: "Total Amount",
    },
    {
      name: "orderDate",
      type: "datetime",
      title: "Order Date",
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: { list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"] },
    },
    {
      name: "paymentStatus",
      type: "string",
      title: "Payment Status",
      options: { list: ["Paid", "Unpaid"] },
    },
  ],
};
