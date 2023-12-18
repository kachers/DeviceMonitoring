import Navigation from './navigation';
import Userinfo from './userinfo';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className='flex flex-col items-center w-[1440px] h-auto items-start gap-10 py-4 px-5 border-b border-solid border-neutral-300'>
      <div className='flex w-[1170px] h-[40px] items-center relative'>
        <div className='w-[118px]'>
          <Image src="/logotype.svg" alt="Logo" width={66} height={40} className='flex p-r-52 flex-col items-flex-start gap-2.5'/>
        </div>
        <Navigation />
        <Userinfo name="Roberts" avatar="/base.svg" />
      </div>
    </div>
  );
};

export default Navbar;