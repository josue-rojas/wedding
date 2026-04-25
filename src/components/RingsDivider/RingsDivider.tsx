import styles from './styles.module.css'

export function RingsDivider() {
  return (
    <div className={styles.ringsDivider} aria-hidden="true">
      <span className={styles.ringsDividerLine} />
      <svg
        className={styles.ringsDividerSvg}
        viewBox="0 0 44 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="11" r="8" stroke="#9aaa7a" strokeWidth="1.2" />
        <circle cx="30" cy="11" r="8" stroke="#9aaa7a" strokeWidth="1.2" />
      </svg>
      <span className={styles.ringsDividerLine} />
    </div>
  )
}
