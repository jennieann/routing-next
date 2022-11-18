import styles from './MainHeader.module.css';
import Link from 'next/link';
const MainHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Fork & Knife</a>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/events">All Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainHeader;
