import Device from './device';
import Head from './head';

const DevicesTable: React.FC = () => {
    return (
      <div className= 'flex flex-col w-[1170px] items-start rounded-md border border-solid border-gray-300 bg-white shadow-md z-10'>
        <div className='flex py-5 justify-between items-center self-stretch'>  
          <Head />       
        </div>
        <div className='flex flex-col self-stretch p-0 px-5 pb-5 items-flex-start gap-1'>
          <Device />
          <Device />
          <Device />
        </div>  
        <div className='flex self-stretch p-3 pl-5 items-center gap-20 rounded-b-md bg-neutral-200'>
            <p>Showing 1 - 3 of 3 devices</p>
        </div>       
      </div>
    );
  };
  
  export default DevicesTable;