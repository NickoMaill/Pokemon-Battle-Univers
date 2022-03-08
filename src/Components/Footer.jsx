import "../Sass/Footer.scss"
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faB } from "@fortawesome/free-solid-svg-icons";

library.add(faB)

export default function Footer() {

  return (

    <footer>

      <div className="footer-container">

        <div className="footer-div">

          <div>
            <span>&#9400; Developped by Nicolas Maillols {dayjs().format("YYYY")}</span>
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
            <span>Check the repo on gitHub</span>
            <img src={require("../assets/images/github-brands.svg")} alt="github"/>
          </div>

        </div>

      </div>

    </footer>

  );
}
