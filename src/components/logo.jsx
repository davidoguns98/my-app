import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoCase}>
      <img src="/logo.jpg" alt="pet-finder" className={styles.logo} />
    </div>
  );
}
export default Logo;
