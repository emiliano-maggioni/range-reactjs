import styles from '../styles/Exercise2.module.css'
import Range from "components/range/Range";

const FixedValuesRange = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
          Fixed values range
          </h1>    
           <div className={styles.rangeContainer}>
            <Range />
           </div>   

      </main>
    </div>
  )
}

export default FixedValuesRange
 