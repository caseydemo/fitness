import Image from "next/image";
import styles from "./page.module.css";
import { getAllExercises } from "./lib/db";

export default function Home() {
  return <main className={styles.main}></main>;
}
