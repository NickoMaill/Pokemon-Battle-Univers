import "../Sass/Footer.scss"
import { SiGithub } from "react-icons/si";

export default function Footer() {

  return (

    <footer>

      <div className="footer-container">

        <div className="footer-div">

          <div>
            <span>&#9400; Developped by Nicolas Maillols {new Date().getFullYear()}</span>
          </div>

          <div className="title-container">
            <img
              alt="Pokemon Logo"
              className="logo"
              src={require("../assets/images/Header-icon/pokemon-logo.webp")}
            />
            <h1 className="title-header">Battle Universe</h1>
          </div>

          <div>
            <span>
              <a
                href="https://github.com/NickoMaill/Pokemon-Battle-Univers"
                target="_blank"
                rel="noreferrer">
                Check the repo on GitHub <SiGithub />
              </a>
            </span>
          </div>

        </div>

      </div>

    </footer>

  );
}
