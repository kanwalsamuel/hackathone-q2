// Define PageProps
export interface PageProps {
  title: string;
  description: string;
}

// Define TEntry
export type TEntry = {
  default: (args: { customField: string }) => any;
};

// Utility types
export type FirstArg<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never;
export type Diff<T, U, K extends keyof any> = Omit<T, K> & Omit<U, K>;

// Function to check fields
function checkFields<T>(data: T): T {
  console.log("Validated Data:", data);
  return data;
}

// Corrected Example Usage
const result = checkFields<
  Omit<PageProps, 'title'> & { customField: string } // Explicitly combine types
>({
  description: 'Category Page Description', // Kept from PageProps
  customField: 'This is a custom field', // Added for TEntry['default']
});

console.log(result);
