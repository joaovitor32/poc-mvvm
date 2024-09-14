"use client";

import styles from "./page.module.css";

import Authentication from "@/app/view/Authentication";
import { Provider } from "react-redux";
import { useAuthentication } from "./view-model";
import { store } from "@/app/models/stores/authentication/store";

export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
        <Authentication />
      </Provider>
    </main>
  );
}
