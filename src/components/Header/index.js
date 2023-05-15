import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Header = (props) => {
  const logoutTriggered = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://www.apkonline.net/imagescropped/edwiselyacceleratedlearningplatformicon128.jpgplus.webp"
            alt="logo"
            className="website-logo"
          />
        </Link>

        <ul className="nav-menu">
          <li className="nav-link">
            <Link to="/" className="link-text">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/faq" className="link-text">
              FAQ's
            </Link>
          </li>

          <li className="nav-link">
            <a
              href="https://chat.openai.com/"
              className="link-text"
              target="_blank"
              rel="noreferrer"
            >
              Doubt?
            </a>
          </li>

          <li className="nav-link">
            <button
              type="button"
              onClick={logoutTriggered}
              className="logoutBtn"
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
