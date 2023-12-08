import React from 'react';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
interface LinkProps {
  icon: string;
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ icon,href, text }) => {
  return (
    <div className={`flex gap32 ${styles.linkContainer}`}>
      <Image src={icon} alt="icon" width={24} height={24} className="w-full h-full" />
      <a href={href} className='font-inter text-base font-medium leading-22 tracking-tighter text-left text-neutral-500'>
      <span>{text}</span>
      </a>
    </div>
  );
};

export default Link;