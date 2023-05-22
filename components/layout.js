import styles from './layout.module.css';
import TableOfContents from './presentational/TableOfContents/index';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <TableOfContents/>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}