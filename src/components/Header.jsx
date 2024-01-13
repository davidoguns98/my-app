import styles from "./Header.module.css";
import Logo from "./logo";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
