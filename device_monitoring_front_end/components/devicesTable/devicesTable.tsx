import Device from './device';
import Head from './head';
import styles from '../../styles/devicesTable.module.css';

const DevicesTable: React.FC = () => {
    return (
      <div className= {styles.table}>
        <div className={styles.tableHead}>  
          <Head />       
        </div>
        <div className={styles.tableBody}>
          <Device />
          <Device />
          <Device />
        </div>  
        <div className={styles.tableBottom}>
            <p>Showing 1 - 3 of 3 devices</p>
        </div>       
      </div>
    );
  };
  
  export default DevicesTable;