import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Hello  world</h2>
        <ul>
          <li>
            <Link href="/pp">Pp</Link>
          </li>
          <li>
            <Link href="/products/dog">Dog</Link>
          </li>
          <li>
            < Link href="/products/cat">Cat</Link>
          </li>
      </ul>
      </div>
    </main >
  );
}
