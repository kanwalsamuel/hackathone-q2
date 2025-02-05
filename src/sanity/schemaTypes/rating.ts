export const review = {
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "text",
      title: "Review Text",
      type: "string",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
  ],
};
