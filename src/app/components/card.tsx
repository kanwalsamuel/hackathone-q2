


// import React from 'react';  // Make sure React is imported
// import Image from 'next/image';

// interface CardProps {
//   imageSrc: string;
//   title: string;
//   subtitle: string;
//   isLarge?: boolean;  // Optional prop for large card size
// }

// const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle, isLarge }) => {
//   return (
//     <div
//       className={`${
//         isLarge ? 'w-[630px] h-[462px]' : 'w-[305px] h-[462px]'
//       } flex flex-col items-center bg-white rounded-lg shadow-lg`}
//     >
//       {/* Image */}
//       <div
//         className={`relative ${
//           isLarge ? 'w-[630px] h-[375px]' : 'w-[305px] h-[375px]'
//         } mx-auto`} // Center the image container
//       >
//         <Image
//           src={imageSrc}
//           alt={title}
//           layout="fill"  // Ensures the image fully fills the container
//           objectFit="cover" // Keeps the aspect ratio intact
//           className="rounded-t-lg"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h4 className="text-left text-[18px] font-bold text-[#2A254B]">{title}</h4>
//         <p className="text-left text-[16px] font-normal text-[#2A254B] mt-2">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';  // Make sure React is imported
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  isLarge?: boolean;  // Optional prop for large card size
}

const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle, isLarge }) => {
  return (
    <div
      className={`${
        isLarge
          ? 'w-full sm:w-[630px] h-[462px]' // Full width on small screens, larger width on medium and large screens
          : 'w-full sm:w-[305px] h-[462px]' // Same here for smaller cards
      } flex flex-col items-center bg-white rounded-lg shadow-lg`}
    >
      {/* Image */}
      <div
        className={`relative ${
          isLarge ? 'w-full sm:w-[630px] h-[375px]' : 'w-full sm:w-[305px] h-[375px]'
        } mx-auto`} // Center the image container, responsive width
      >
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"  // Ensures the image fully fills the container
          objectFit="cover" // Keeps the aspect ratio intact
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-left text-[18px] font-bold text-[#2A254B]">{title}</h4>
        <p className="text-left text-[16px] font-normal text-[#2A254B] mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
