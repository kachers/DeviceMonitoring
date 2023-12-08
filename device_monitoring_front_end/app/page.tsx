import Navbar from '../components/navbar/navbar';
import DevicesTable from '../components/devicesTable/devicesTable'
import styles from '../styles/page.module.css';
import './globals.css';

export default function Home() {
  return (
    <>
   <div className={styles.head}>
    <Navbar />
    <p className="text-danger-300">
            Devices
    </p> 
   </div>
   <div className={styles.background}>
    <DevicesTable />
   </div>
   </>
  )
}