
const Device: React.FC = () => {
    return (
      <div className= 'flex p-t-12 p-r-8 p-b-12 p-l-20 items-center gap-16 self-stretch rounded-6 border border-neutral-400 bg-neutral-100'>
         <div className='flex items-center gap-16 flex-1'>
            <div className='flex max-w-250 items-center gap-12 flex-1'>
              <div className='flex flex-col items-start flex-1'>
                <p className="self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800">
                  Main Entry Intercom
                </p>
                  <p className='text-neutral-700 font-Inter text-12 font-medium leading-16 tracking-tight letter-tight'>
                    Connection: 0%</p>
              </div>
            </div>
            <div className='flex max-w-140 flex-col items-start flex-1'>
              <p className='text-neutral-700 font-inter text-xs font-normal leading-16 tracking-tight'>Model</p>
              <p className='self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800'>2N Verso</p>
            </div>
            <div className='flex flex-col items-start flex-1'>
              <p className='text-neutral-700 font-inter text-xs font-normal leading-16 tracking-tight'>Con-stat</p>
              <p className='self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800'>235/235 messages over 28 days</p>
            </div>
         </div>
         <div className='flex items-start gap-4'></div>     
      </div>
    );
  };
  
  export default Device;