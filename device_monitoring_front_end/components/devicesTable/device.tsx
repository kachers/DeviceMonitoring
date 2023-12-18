import Image from 'next/image';

const Device: React.FC = () => {
    return (
      <div className= 'flex pt-3 pr-2 pb-3 pl-5 items-center gap-4 self-stretch rounded-md border border-neutral-400 bg-neutral-100'>
         <div className='flex items-center gap-4 flex-1'>
            <div className='flex max-w-[250px] items-center gap-4 flex-1'>
              <div className='flex flex-col items-start flex-1'>
                <p className="self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800">
                  Main Entry Intercom
                </p>
                  <p className='text-neutral-700 font-Inter text-12 font-medium leading-16 tracking-tight letter-tight'>
                    Connection: 0%</p>
              </div>
            </div>
            <div className='flex max-w-[140px] flex-col items-start flex-1'>
              <p className='text-neutral-700 font-inter text-xs font-normal leading-16 tracking-tight'>Model</p>
              <p className='self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800'>2N Verso</p>
            </div>
            <div className='flex flex-col items-start flex-1'>
              <p className='text-neutral-700 font-inter text-xs font-normal leading-16 tracking-tight'>Con-stat</p>
              <p className='self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800'>235/235 messages over 28 days</p>
            </div>
         </div>
         <div className='flex items-start gap-1'>
          <button className='flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200
          font-inter font-medium text-[14px]/[20px] text-neutral-800'>
              Settings
          </button>
          <button className='flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200
          font-inter font-medium text-[14px]/[20px] text-neutral-800'>
              Control
          </button>
          <button className='flex justify-center items-center w-[36px] h-[36px] rounded-md bg-neutral-100'>
          <Image src="/Right.svg" alt="Avatar" width={16} height={16}/>
          </button>
          </div>     
      </div>
    );
  };
  
  export default Device;