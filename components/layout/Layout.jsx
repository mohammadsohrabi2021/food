import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">FoodMarkt</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <Link href="/"  rel="noreferrer">
          FoodMarkt 
        </Link>
         Sohrabi | Project &copy;
      </footer>
    </>
  );
}

export default Layout;
