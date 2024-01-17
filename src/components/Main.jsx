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
              <h3>Hi, We help you find your favorite dog breed</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                quibusdam soluta laudantium vero, dolor quos iusto delectus!
                Quo, dolores asperiores.
              </p>
              <a href="#">See more</a>
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
