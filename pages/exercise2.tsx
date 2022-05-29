import styles from '../styles/Exercise2.module.css'
import FixedRange from 'components/fixedRange/FixedRange';

const Exercise2Page = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
          Fixed values range
          </h1>    
           <div className={styles.rangeContainer}>
            <FixedRange />
           </div>   

      </main>
    </div>
  )
}

export default Exercise2Page;
 