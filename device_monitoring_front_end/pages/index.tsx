import Navbar from '../components/navbar/navbar';
import DevicesTable from '../components/devicesTable/devicesTable'
import styles from '../styles/page.module.css';
import '../styles/globals.css';
import 'fontsource-inter';

export default function Home() {
  return (
    <>
   <div className={styles.head}>
    <Navbar />
    <p className="text-white">
            Devicesss
    </p> 
   </div>
   <div className={styles.background}>
    <DevicesTable />
   </div>
   </>
  )
}
