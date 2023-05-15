import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found-container">
    <img src="http://surl.li/gjbsw" alt="not found" className="not-found-img" />

    <h1 className="not-found-heading">Page not Found</h1>

    <Link to="/">
      <button type="button" className="custom-btn">
        Home
      </button>
    </Link>
  </div>
);

export default NotFound;
