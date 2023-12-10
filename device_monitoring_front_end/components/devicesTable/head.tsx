
const Head: React.FC = () => {
    return (
      <div className='flex p-0 px-20 justify-between items-center flex-1'>
        <div className='flex items-start gap-4'>
          <button className='flex p-6 justify-center items-center gap-10 rounded-md border border-solid border-neutral-400 bg-neutral-100'>online</button>
            <label className='flex p-2 justify-center items-center gap-10 rounded-6 bg-neutral-200'>2</label>
            
            <button className='flex p-6 justify-center items-center gap-10 rounded border border-solid border-neutral-400 bg-primary-300'>offline</button>
        </div>
        <div className='flex flex-col items-start gap-10 w-300 p-t-9 p-b-16 p-l-9 p-r-12 bd-neutral-200 rounded-6'>
            <input placeholder="Quick search"></input>
        </div>
      </div>
    );
  };
  
  export default Head;