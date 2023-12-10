import Device from './device';
import Head from './head';

const DevicesTable: React.FC = () => {
    return (
      <div className= 'flex flex-col w-1170 items-start rounded-md border border-solid border-gray-300 bg-white shadow-md'>
        <div className='flex py-20 justify-between items-center self-stretch'>  
          <Head />       
        </div>
        <div className='flex flex-col self-stretch p-0 px-20 pb-20 items-flex-start gap-4'>
          <Device />
          <Device />
          <Device />
        </div>  
        <div className='flex self-stretch p-12 pl-20 items-center gap-20 rounded-b-6 bg-neutral-200'>
            <p>Showing 1 - 3 of 3 devices</p>
        </div>       
      </div>
    );
  };
  
  export default DevicesTable;