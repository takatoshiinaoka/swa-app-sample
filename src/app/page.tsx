import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <a
          href="/.auth/login/github?post_login_redirect_uri=/mypage"
          className={styles.link}
        >
          Login
        </a>
        <a href="/mypage" className={styles.link}>
          mypage
        </a>
      </div>
    </main>
  );
}
