// Dependencies
import Image from 'next/image';

// Images
import authourImage from './images/authour.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 child-container">
      <div>
        <span className='title'>HEY, I&apos;M KEERTHIVASAN</span>
        <div className="font-bold text-xl mt-2">FRONTEND DEVELOPER</div>
        <ul className='my-2 text-white text-sm list-disc leading-7 list-inside'>
          <li> Transforming Designs into Interactive Web Applications.</li>
          <li>Crafting Engaging User Experiences.</li>
          <li>Delivering High-Quality Code for Scalable Solutions. </li>
        </ul>
        <span className='font-bold mt-2 text-white bg-black px-2 py-1 rounded'>Let’s Make the Web. Faster 🚀</span>
      </div>
      <Image
        src={authourImage}
        alt="Keerthivasan"
        width={250}
        height={100}
        className='rounded-full h-[250px]'
      />
    </div>
  );
}
