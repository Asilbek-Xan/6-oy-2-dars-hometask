import { useState } from "react";
import style from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.left}>
        <img src="./Shortly.svg" alt="logo" className={style["header-logo"]} />

        <nav className={`${style.navLinks} ${open ? style.open : ""}`}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <div className={style.mobileAuth}>
            <a href="#">Login</a>
            <a href="#" className={style["header-a-button"]}>
              Sign Up
            </a>
          </div>
        </nav>
      </div>

      <div className={style.right}>
        <a href="#">Login</a>
        <a href="#" className={style["header-a-button"]}>
          Sign Up
        </a>
      </div>

      <img
        src="/src/burger.svg"
        alt="menu"
        className={style.burger}
        onClick={() => setOpen(!open)}
      />
    </header>
  );
}

export default Header;
