import Image from 'next/image';

interface LinkProps {
  name: string;
  avatar: string;
}
const Userinfo: React.FC<LinkProps> = ({ name,avatar }) => {

  return (
    <div className='flex justify-end items-center gap-2 absolute top-1 right-0'>
      <div className='w-8 h-8 bg-red-500 relative'>
        <p className='absolute w-[22px] text-neutral-300 font-inter text-sm font-semi-bold leading-22 text-neutral-800 tracking-[-0.205px] z-10'>
          
        </p>
        <Image src={avatar} alt="Avatar" width={32} height={32}/>
      </div>
      
      <div className='flex justify-end items-center gap-4'>
      <p className='text-neutral-300 font-inter text-sm font-medium leading-22 tracking-[-0.205px]'>{name}</p>
      <Image src="/chevronDown.svg" alt="Avatar" width={8} height={6}/>
      </div>
    </div>
  );
};

export default Userinfo;