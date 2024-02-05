import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/" className="logo">
          Kalvium ❤️
        </Link>
      </h1>
      <div>
        <Link to="/contact" className="link1">
          Contacts
        </Link>
        <Link to="/register" className="link2">
          Registration Form
        </Link>
      </div>
    </nav>
  );
}

export { NavBar as Nav };
