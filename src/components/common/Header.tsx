import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.inputContainer}>
        <h1 className={styles.logo}>
          <Link href="/">YAGUEM YAGEUM</Link>
        </h1>
        <div className={styles.searchContainer}>
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.53 20.47l-4.6-4.6a8.49 8.49 0 1 0-1.06 1.06l4.6 4.6a.75.75 0 0 0 1.06-1.06zM10.5 17a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5z" />
          </svg>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="검색어를 입력하세요."
          />
        </div>
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link href="/about">소개</Link>
        </li>
        <li>
          <Link href="/map">지도</Link>
        </li>
        <li>
          <Link href="/register">매물등록</Link>
        </li>
        <li>
          <Link href="/guide">부동산 가이드</Link>
        </li>
        <li>
          <Link href="/qa">Q&A</Link>
        </li>
      </ul>
      <div className={styles.userContainer}>
        <button type="button" className={styles.button}>
          <Link href="/login">로그인 </Link>
        </button>
        |
        <button type="button" className={styles.button}>
          <Link href="/signup">회원가입</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
