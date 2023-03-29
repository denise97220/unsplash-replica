import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <>
      <div className={styles.spinner}>
        <div className={styles.bouncing__loader}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </>
  )
}

export default Spinner
