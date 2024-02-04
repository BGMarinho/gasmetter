import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className="title">Gasmetter</h1>
    </header>
  );
}
