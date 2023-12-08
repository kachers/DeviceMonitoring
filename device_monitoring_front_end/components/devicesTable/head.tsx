import styles from '../../styles/devicesTable.module.css'

const Head: React.FC = () => {
    return (
      <div className={styles.tableHeadContent}>
        <div className={styles.buttonDiv}>
            <button className={styles.headButton}>online</button>
            <button className={styles.headButton}>offline</button>
        </div>
        <div className={styles.searchDiv}>
            <input placeholder="Quick search"></input>
        </div>
      </div>
    );
  };
  
  export default Head;