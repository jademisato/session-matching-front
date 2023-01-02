import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Test() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Test page</h2>
        < Link href="/">Go Back TO Home</Link>
      </main>
    </div>
  );
}
