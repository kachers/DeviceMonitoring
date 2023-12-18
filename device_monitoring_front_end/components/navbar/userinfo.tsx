import Image from 'next/image';

interface LinkProps {
  name: string;
  avatar: string;
}
const Userinfo: React.FC<LinkProps> = ({ name,avatar }) => {

  return (
    <div className='flex justify-end items-center gap-8 absolute top-[4px] right-0'>
      <Image src={avatar} alt="Avatar" width={32} height={32}/>
      <div className='flex justify-end items-center gap-4'>
      <p className='text-neutral-300 font-inter text-14 font-medium leading-22 tracking-tight'>{name}</p>
      <Image src="/chevronDown.svg" alt="Avatar" width={8} height={6}/>
      </div>
    </div>
  );
};

export default Userinfo;