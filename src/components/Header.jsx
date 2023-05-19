import logoLight from "../assets/images/logoLight.png";
import cartIcon from "../assets/icons/cartIcon.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav id="header" className="text-white">
            <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logoLight} alt="logo" className="w-20 h-20 object-cover h" />
                    </Link>
                    
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-l">Home</Link>
                    <Link to="#about" className="text-l">About</Link>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <Link to="/cart" className="text-xl w-10">
                        <img src={cartIcon} alt="cart" />
                    </Link>
                    <Link to="/login" className="text-l ">Login</Link>
                    <Link to="/signup" className="text-l pr-8">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}