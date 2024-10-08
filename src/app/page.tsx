import styles from "./page.module.css";
import SongSidebar from "./components/SongSidebar.tsx"
import SongView from "./components/SongView.tsx"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SongSidebar />
        <SongView />
      </main>
    </div>
  );
}
