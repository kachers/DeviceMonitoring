import React from 'react';
import Image from 'next/image';
interface LinkProps {
  icon: string;
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ icon,href, text }) => {
  return (
    <div className='flex items-center w-auto h-[24px] gap-2'>
      <Image src={icon} alt="icon" width={24} height={24} />
      <a href={href} className='font-inter text-base font-medium leading-22 tracking-tighter text-left text-neutral-500'>
      {text}
      </a>
    </div>
  );
};

export default Link;