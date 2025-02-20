




import Image from 'next/image'
import React from 'react'

const Touch = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-white ">
        <div className='py-8 text-[#2A254B] w-full max-w-7xl px-4 md:px-12'>
          <div className='flex flex-col md:flex-row justify-center items-center '>
            {/* Text Content */}
            <div className='w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between '>
              <div>
                <h1 className='text-2xl md:text-2xl mb-36 font-satoshi'>
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h1>
                <h1 className='py-6 text-lg md:text-xl mt-16 font-satoshi'>
                  When we started Avion, the idea was simple. Make high-quality furniture <br /> affordable and available for the mass market.
                </h1>
                <h1 className='text-base md:text-lg mt-18 font-satoshi'>
                  Handmade and lovingly crafted furniture and homeware is what we live, <br /> breathe, and design, so our Chelsea boutique became the hotbed for the <br /> London interior design community.
                </h1>
              </div>
              <div className='my-10 mb-14'>
                <button className='bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B] font-clash'>
                  Get in touch
                </button>
              </div>
            </div>

            {/* Image */}
            <div className='w-full md:w-[890px] h-auto mb-44'>
              <Image
                src={'/images/Image (4).png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Touch;