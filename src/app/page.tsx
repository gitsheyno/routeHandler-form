import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      Hello
      <Link href="/feedback">Go TO FeedBack</Link>
    </main>
  );
}
