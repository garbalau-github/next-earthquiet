import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.banner}>
        <span>🇺🇦</span>
        <a
          className={styles.bannerLink}
          target='_blank'
          href='https://supportukrainenow.org/'
          rel='noreferrer'
        >
          <span>supportukrainenow.org</span>
        </a>
      </div>
      <div className={styles.footerUpper}>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/cookies'>
                <a>Cookies</a>
              </Link>
            </li>
            <li>
              <Link href='/terms'>
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href='/privacy'>
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/contribution'>
                <a>Contribution</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/docs'>
                <a>Documentation</a>
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <a>Our Team</a>
              </Link>
            </li>
            <li>
              <Link href='/donate'>
                <a>Support Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLower}>
        <p className={styles.footerLowerCopy}>
          &copy;{new Date().getFullYear()} Earthquiet
        </p>
      </div>
    </footer>
  );
};

export default Footer;
