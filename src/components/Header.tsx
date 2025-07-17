import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="h-14 bg-slate-950 text-white flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src="/netflix.png"
              className="w-16 sm:w-28 cursor-pointer"
              alt="logo"
            />
          </Link>
          <Link to={"/search?mediatype=movie"}>Phim</Link>
          <Link to={"/search?mediatype=tv"}>Truyền Hình</Link>
        </div>
        <Link to={"/search"} aria-label="Tìm kiếm">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
