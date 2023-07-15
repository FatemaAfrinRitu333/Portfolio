import logo from "../../assets/portfolioLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative shadow-lg p-3 rounded-lg">
      <div className="navbar fixed top-0 left-0 right-0 z-10 md:px-12 md:py-4 bg-zinc-950/50">
        <div className="navbar-start">
          <a className="h-full">
            <img className="h-[50px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn btn-outline border-0 border-b-2 rounded-none hover:rounded-md hover:bg-transparent hover:text-[#edc800] ease-in-out duration-1500">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
