import styles from '../../styles/devicesTable.module.css'

const Device: React.FC = () => {
    return (
      <div className= {styles.deviceBlock}>
         <div className={styles.content}>
            <div className={styles.firstColumn}>
            <p className="self-stretch font-Inter text-base font-semibold leading-6 tracking-tighter text-neutral-800">
              Main Entry Intercom
            </p>
              <p className={styles.locationOffline}>Connection: 0%</p>
            </div>
            <div className={styles.secondColmn}>
              <p>Model</p>
              <p>2N Verso</p>
            </div>
            <div className={styles.thirdColumn}>
              <p>Con-stat</p>
              <p>235/235 messages over 28 days</p>
            </div>
         </div>
         <div className={styles.buttons}></div>     
      </div>
    );
  };
  
  export default Device;