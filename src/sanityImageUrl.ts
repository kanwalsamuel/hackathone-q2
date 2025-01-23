import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity/lib/client'; // import your Sanity client

const builder = imageUrlBuilder(client);

// Function to generate image URL
export const urlFor = (source: any) => builder.image(source);
