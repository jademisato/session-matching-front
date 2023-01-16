import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Get json file data for selected links
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

// Create json file path to individual pages
export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/products.json");
  const data = await req.json();

  const paths = data.map(product => {
    return {
      params: {
        id: product,
      }
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// Get selected link ID and display the information
const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.description}>
      <main className={styles.main}>
        <h1>This is {id} page</h1>
        <img src={product.image} width="300" height="400" />
        <p>{product.name}</p>
        <br />
        < Link href="/">Go Back TO Home</Link>
      </main>
    </div>
  );
}

export default Product;