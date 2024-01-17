import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <h3>For questions and suggestions</h3>
        <p>Davidoguns@gmail.com</p>
        <p>Phone: 09039737396</p>
      </div>
      <div>
        <h3>We are waitin for your visit</h3>
        <p>Github: </p>
        <p>LinkedIn: </p>
      </div>
      <div>
        <img src="./dog-2.jpg" alt="" />
      </div>
    </footer>
  );
}
export default Footer;
