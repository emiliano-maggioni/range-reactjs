import styles from '../styles/Exercise1.module.css'
import Range from "components/range/Range";

const NormalRange = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
          Normal Range
          </h1>    
           <div className={styles.rangeContainer}>
            <Range />
           </div>   

      </main>
    </div>
  )
}

export default NormalRange
 