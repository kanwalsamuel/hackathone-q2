
import { createClient } from 'next-sanity';

 export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Your token with necessary permissions
  apiVersion: '2025-01-10', // use the date when you first set up your Sanity project
  useCdn: false,
});
 