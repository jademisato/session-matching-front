import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <p>this is header</p>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </>
  )
}