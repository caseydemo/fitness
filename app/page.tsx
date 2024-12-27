import Image from "next/image";
import styles from "./page.module.css";
import LogDisplay from "./components/LogDisplay";

export default function Home() {
  return (
    <main className={styles.main}>
    <LogDisplay />
    </main>
  );
}
