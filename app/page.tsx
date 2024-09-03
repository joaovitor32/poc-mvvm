import Image from "next/image";
import styles from "./page.module.css";

import Authentication  from "@/app/view/Authentication";

export default function Home() {
  return (
    <main className={styles.main}>
      <Authentication />
    </main>
  );
}
