import styles from './FlowCreation.module.css';
import FlowSection1 from '../flowsection1/FlowSection1';

const FlowCreation = () => {
  return (
    <div>
        <div>
            <div className={styles.hdiv}>
                <h1 className={styles.flowh1}>Flow Creation</h1>
                <h1 className={styles.controlh1}>Your Space. Your Control.</h1>
            </div>
            <div className={styles.ptextdiv}>
                <p className={styles.ptext}>Explore practical scenarios where SMART automation shines.</p>
            </div>
        </div>
        <div>
            <FlowSection1 />
        </div>
    </div>
  );
};

export default FlowCreation;