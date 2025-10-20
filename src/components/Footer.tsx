import styles from "./Footer.module.css";
import { footerLinks } from "@/data/store";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.backToTop}>
        Back to top
      </a>
      <div className={styles.columns}>
        {footerLinks.map((column) => (
          <div key={column.title} className={styles.column}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Amazon Clone • Crafted for demo purposes.
      </div>
    </footer>
  );
};

export default Footer;
