import Link from "next/link";
import { FiMapPin, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";
import { navLinks } from "@/data/store";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo}>
          <span>amazon</span>
          <span style={{ fontSize: "10px", letterSpacing: "2px" }}>CLONE</span>
        </Link>

        <div className={styles.location}>
          <FiMapPin size={18} />
          <div>
            <span>Hello</span>
            <strong>Deliver to your address</strong>
          </div>
        </div>

        <div className={styles.search}>
          <select aria-label="Search category">
            <option>All</option>
            <option>Electronics</option>
            <option>Home & Kitchen</option>
            <option>Sports</option>
            <option>Beauty</option>
            <option>Books</option>
          </select>
          <input placeholder="Search Amazon clone" />
          <button aria-label="Search">
            <FiSearch />
          </button>
        </div>

        <div className={styles.quickLinks}>
          <span>
            <small>Hello, sign in</small>
            <strong>Account &amp; Lists</strong>
          </span>
          <span>
            <small>Returns</small>
            <strong>&amp; Orders</strong>
          </span>
          <span>
            <small>Your</small>
            <strong>Prime</strong>
          </span>
          <span className={styles.cart}>
            <FiShoppingCart size={22} />
            Cart
          </span>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.menu}>
          <FiMenu size={18} />
          All
        </span>
        <div className={styles.linkRow}>
          {navLinks.map((link) => (
            <Link key={link} href="#">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
