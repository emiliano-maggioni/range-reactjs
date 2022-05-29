import styles from '../styles/Exercise1.module.css'
import NormalRange from "components/normalRange/NormalRange"

const Exercise1Page = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Normal Range
          </h1>    
           <div className={styles.rangeContainer}>
            <NormalRange />
           </div>   

      </main>
    </div>
  )
}

export default Exercise1Page
 