import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="bg-cyan-500">
        <p className="text-3xl font-bold underline">this is header</p>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </>
  )
}