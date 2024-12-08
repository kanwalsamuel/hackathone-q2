


// import React from 'react';
// import Card from './card';

// const Products: React.FC = () => {
//   return (
//     <section className="w-full max-w-[1440px] bg-white flex flex-col items-center px-6 py-12 pl-28">
//       {/* Heading */}
//       <h2 className="text-center sm:text-left text-[20px] sm:text-[24px] md:text-[32px] font-normal font-[Clash Display] text-[#2A254B] mb-8">
//         Our Popular Products
//       </h2>

//       {/* Product Cards Wrapper */}
//       <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-start gap-8 w-full ml-44">
//         {/* Large Card */}
//         <Card
//           imageSrc="/images/Large.png"
//           title="The Popular Suede Sofa"
//           subtitle="£980"
//           isLarge={true}
//         />

//         {/* Group of Smaller Cards */}
//         <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
//           {/* Smaller Cards */}
//           <Card
//             imageSrc="/images/Parent (3).png"
//             title="The Dandy Chair"
//             subtitle="£350"
//             isLarge={false}
//           />
//           <Card
//             imageSrc="/images/Parent (4).png"
//             title="Vintage Armchair"
//             subtitle="£450"
//             isLarge={false}
//           />
//         </div>
//       </div>

//       {/* View Collection Button */}
//       <button
//         className="mt-12 w-[170px] h-[56px] bg-[#4e4d93] text-white font-medium text-[14px] sm:text-[16px] flex items-center justify-center rounded-md shadow-lg hover:bg-[#3d3b7a] transition duration-300"
//       >
//         View Collection
//       </button>
//     </section>
//   );
// };

// export default Products;


'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/about" page
  };
  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12 bg-white'>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto'>
              <Image
                src={'/images/large.png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src={'/images/Parent (3).png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src={'/images/Parent (4).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' onClick={handleNavigation}>
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;