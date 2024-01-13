import styles from "./Main.module.css";
import Header from "./Header";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <section>
        <div className={styles.container}>
          <div className={styles.text}>
            <div>
              <p>Hi, We help you find your favorite dog breed</p>
              <p>
                We provide awesome breeds and have been consistent for years
              </p>
            </div>
          </div>
          <div className={styles.firstImage}>
            <img src="./dog-1.jpg" alt="home-dog" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
