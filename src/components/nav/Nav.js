import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav false">
      <Link to="/">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </Link>
      <Link to="/">
        <img
          className="nav__avatar"
          src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Nav;
