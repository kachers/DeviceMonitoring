import React from 'react';
import Image from 'next/image';
interface LinkProps {
  icon: string;
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ icon,href, text }) => {
  return (
    <a href={href} className='flex items-center gap-2 w-auto h-[24px]
      font-inter text-[14px]/[22px] font-medium tracking-[-0.205px] text-left text-neutral-500 
      hover:text-neutral-100'>
      <Image src={icon} alt="icon" width={24} height={24} />
      {text}
    </a>   
  );
};

export default Link;