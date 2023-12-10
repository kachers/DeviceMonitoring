import Navbar from '../components/navbar/navbar';
import DevicesTable from '../components/devicesTable/devicesTable'
import './globals.css';

export default function Home() {
  return (
  <div className='flex flex-col items-start w-1440 h-900 '>
   <div className='flex flex-col items-center gap-20 pb-20 bg-neutral-800'>
    <Navbar />
    <div className='flex flex-col items-center items-start gap-12 flex-1 w-1170'>
      <p className='self-stretch text-neutral-100 font-inter text-21 font-medium leading-28 tracking-tight'>
              Devices
      </p> 
    </div>
   </div>
   <div className='flex flex-col items-center w-1440 pb-174'>
    <span className='w-1440 h-40 absolute bg-neutral-800'></span>
    <DevicesTable />
   </div>
   </div>
  )
}