import style from './Footer.module.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style["footer-container"]}>

        {/* Logo section */}
        <div className={style["footer-logo-section"]}>
          <div className={style["footer-logo"]}>
            <h2>Shortly</h2>
          </div>
        </div>

        {/* Features column */}
        <div className={style["footer-column"]}>
          <h4 className={style["footer-column-title"]}>Features</h4>
          <ul className={style["footer-list"]}>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Link Shortening</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Branded Links</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Analytics</a>
            </li>
          </ul>
        </div>

        {/* Resources column */}
        <div className={style["footer-column"]}>
          <h4 className={style["footer-column-title"]}>Resources</h4>
          <ul className={style["footer-list"]}>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Blog</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Developers</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Support</a>
            </li>
          </ul>
        </div>

        {/* Company column */}
        <div className={style["footer-column"]}>
          <h4 className={style["footer-column-title"]}>Company</h4>
          <ul className={style["footer-list"]}>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>About</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Our Team</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Careers</a>
            </li>
            <li className={style["footer-list-item"]}>
              <a href="#" className={style["footer-link"]}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Social icons */}
        <div className={style["footer-social"]}>
          <a href="#" className={style["social-link"]} aria-label="Facebook">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={style["social-icon"]}>
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" className={style["social-link"]} aria-label="Twitter">
            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" className={style["social-icon"]}>
              <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
            </svg>
          </a>
          <a href="#" className={style["social-link"]} aria-label="Pinterest">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={style["social-icon"]}>
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.567-.994 3.992-.283 1.189.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12 24.009c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className={style["social-link"]} aria-label="Instagram">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={style["social-icon"]}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;