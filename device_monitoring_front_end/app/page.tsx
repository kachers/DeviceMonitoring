import Navbar from '../components/navbar/navbar';
import DevicesTable from '../components/devicesTable/devicesTable'
import './globals.css';

export default function Home() {
  return (
  <div className='flex flex-col pb-44 w-screen h-[900px] bg-neutral-300 relative'>
   <div className='flex flex-col items-center gap-20 pb-5 bg-neutral-800'>
    <Navbar />
    <div className='flex flex-col items-center items-start gap-3 flex-1 w-[1170px]'>
      <p className='self-stretch text-neutral-500 gap-2'>Home /</p>
      <p className='self-stretch text-neutral-100 font-inter text-21 font-medium leading-28 tracking-tight'>
              Devices
      </p> 
    </div>
   </div>
   <section className='flex flex-col items-center pb-44 bg-neutral-300'>
       <span className='w-screen h-[40px] absolute bg-neutral-800'></span>
    <DevicesTable />
   </section>
   <footer className='flex flex-col items-start absolute bottom-0 py-4 px-[135px] gap-2.5'>
      <div className='flex w-max[1170px] items-start self-stretch gap-2.5'>
        <p className='font-inter font-normal text-[14px]/[22px] tracking-tight text-neutral-700'>© 2023 LCD. All rights reserved.</p>
      </div>
   </footer>
   </div>
  )
}