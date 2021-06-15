import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const username = useSelector((state) => state.user);
  return (
    <div className="nav false">
      <Link to="/">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </Link>
      {username && username.user && (
        <span className="nav__greeting">Hello, {username.user}</span>
      )}
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
