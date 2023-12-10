import Navigation from './navigation';
import Userinfo from './userinfo';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-1440 py-4 px-5 border-b border-solid border-neutral-300 bg-neutral-800'>
      <div className='flex w-1170 items-center self-stretch'>
        <Image src="/logotype.svg" alt="Logo" width={66} height={40} className='flex p-r-52 flex-col items-flex-start gap-10'/>
        
        <Navigation />
        <Userinfo name="Roberts" avatar="/base.svg"/>
      </div>
    </div>
  );
};

export default Navbar;