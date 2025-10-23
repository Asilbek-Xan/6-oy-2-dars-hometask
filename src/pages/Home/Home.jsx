import style from './Home.module.css';

function Home() {
  return (
    <>
      <section className={style["section-1"]}>
        <div className={style.home}>
          <div className={style["home-asosiy"]}>
            <div className={style["home-left"]}>
              <h1 className={style["home-h1"]}>
                More than just shorter links
              </h1>
              <p className={style["home-desc"]}>
                Build your brand's recognition and get detailed insights on how your links are performing.
              </p>
              <button className={style["home-button"]}>Get Started</button>
            </div>
            <div className={style["home-right"]}>
              <img src="./hero-odam.svg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <section className={style["section-2"]}>
        <h1 className={style["sect-2-text"]}>Advanced Statistics</h1>
        <p className={style["sect-2-text-p"]}>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>

        <div className={style["cards-container"]}>
          <div className={style["cards-line"]}></div>

          <div className={style["card"]}>
            <div className={style["card-icon"]}>
              <img src="./grafic.svg" alt="Brand Recognition" />
            </div>
            <h3 className={style["card-title"]}>Brand Recognition</h3>
            <p className={style["card-description"]}>
              Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          <div className={style["card"]}>
            <div className={style["card-icon"]}>
              <img src="./spped.svg" alt="Detailed Records" />
            </div>
            <h3 className={style["card-title"]}>Detailed Records</h3>
            <p className={style["card-description"]}>
              Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
            </p>
          </div>

          <div className={style["card"]}>
            <div className={style["card-icon"]}>
              <img src="./pencils.svg" alt="Fully Customizable" />
            </div>
            <h3 className={style["card-title"]}>Fully Customizable</h3>
            <p className={style["card-description"]}>
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      <section className={style["section-3"]}>
        <div className={style["boost-section"]}>
          <h2 className={style["boost-title"]}>Boost your links today</h2>
          <button className={style["boost-button"]}>Get Started</button>
        </div>
      </section>


    </>
  );
}

export default Home;