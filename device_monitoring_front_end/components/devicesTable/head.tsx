import Image from 'next/image';

const Head: React.FC = () => {
    return (
      <div className='flex p-0 px-5 justify-between items-center flex-1'>
        <div className='flex items-start gap-1'>
          <button className='flex p-1.5 pl-4 justify-center items-center gap-2.5 rounded-md border border-solid 
          border-neutral-400 bg-neutral-100 font-inter font-medium text-[14px]/[20px] text-neutral-800'>
            Online
            <label className='flex px-2 py-1 justify-center items-center gap-2.5 rounded bg-neutral-200'>2</label>
            </button>
            <button className='flex p-1.5 pl-4 justify-center items-center gap-2.5 rounded-md border border-solid 
            border-neutral-400 bg-primary-300 font-inter font-medium text-[14px]/[20px] text-neutral-100'>
              Offline
            <label className='flex px-2 py-1 justify-center items-center gap-2.5 rounded bg-primary-100 
            text-primary-500'>3</label>
            </button>
        </div>
        <div className='flex flex-col items-start gap-2.5 w-[300px] py-[9px] pl-3 pr-4 bg-neutral-200 
        rounded-md'>
          <div className='flex items-center self-stretch text-[14px]/[18px] gap-2.5'>
            <Image src="/Search.svg" alt="Avatar" width={16} height={16}/>
            <input placeholder="Quick search.." className='bg-neutral-200'></input>
          </div>
        </div>
      </div>
    );
  };
  
  export default Head;