import style from './Header.module.css';

function Header() {
  return (

    <header className={style.header}>


      <div className={style.left}>
        <img src="./Shortly.svg" alt="logo" className={style["header-logo"]} />

        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>

      <div className={style.right}>
        <a href="#">Login</a>
        <a href="#" className={style["header-a-button"]}>Sign Up</a>
      </div>
    </header>
  );
}

export default Header;
