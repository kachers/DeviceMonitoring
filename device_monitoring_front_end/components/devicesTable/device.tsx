import Image from 'next/image';

interface DeviceProps {
  device: {
    id: number;
    name: string;
    model: string;
    location: string;
    conStat: string;
    isOnline: boolean;
  };
}

const Device: React.FC<DeviceProps> = ({ device }) => {
  const { id, name, model, location, conStat, isOnline } = device;

  return (
    <div className='group flex pt-3 pr-2 pb-3 pl-5 items-center gap-4 self-stretch rounded-md border border-neutral-400 bg-neutral-100'>
      <div className='flex items-center gap-4 flex-1'>
        <div className='flex max-w-[250px] items-center gap-4 flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill={isOnline ? "#1B842C" : "#B8143D"}>
            <circle cx="3" cy="3" r="3" />
          </svg>
          <div className='flex flex-col items-start flex-1'>
            <p className="font-Inter text-[14px]/[22px] font-medium tracking-[-0.205px] text-neutral-800">
              {name}
            </p>
            <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px]'>
              Connection: <span className='font-medium'>{location}</span>
            </p>
          </div>
        </div>
        <div className='flex max-w-[140px] flex-col items-start flex-1'>
          <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px] opacity-70'>
            Model</p>
          <p className='font-Inter text-[14px]/[22px] font-medium tracking-[-0.205px] text-neutral-800'>
            {model}</p>
        </div>
        <div className='flex flex-col items-start flex-1'>
          <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px] opacity-70'>
            Con-stat</p>
          <p className='font-Inter text-[14px]/[22px] font-medium tracking-[-0.205px] text-neutral-800'>
            {conStat}</p>
        </div>
      </div>
      <div className='flex items-start gap-1'>
        <button className='flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200
          font-inter font-medium text-[14px]/[20px] text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity'>
          Settings
        </button>
        <button className='flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200
          font-inter font-medium text-[14px]/[20px] text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity'>
          Control
        </button>
        <button className='flex justify-center items-center w-[36px] h-[36px] rounded-md bg-neutral-100'>
          <Image src="/Right.svg" alt="Avatar" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Device;