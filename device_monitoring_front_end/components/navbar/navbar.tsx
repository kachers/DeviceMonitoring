import Navigation from './navigation';
import Userinfo from './userinfo';
import styles from '../../styles/navbar.module.css'
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.flex}>
        <div className={styles.logoLayout}>
        <Image src="/logotype.svg" alt="Logo" width={66} height={40}/>
        </div>
        <Navigation />
        <Userinfo name="Roberts" avatar="/base.svg"/>
      </div>
    </div>
  );
};

export default Navbar;