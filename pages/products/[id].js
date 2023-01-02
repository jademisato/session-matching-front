import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Rewrite the URL of the link to something arbitrary
const Product = ({ product }) => {
  const router = useRouter();
  console.log(router.query.id);
  const { id } = router.query;
  return (
    <div className={styles.description}>
      <main className={styles.main}>
        <h1>This is {id} page</h1>
        <br />
        < Link href="/">Go Back TO Home</Link>
      </main>
    </div>
  );
}

export default Product;