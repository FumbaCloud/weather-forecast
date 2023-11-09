import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <HeaderLogo />
                    <HeaderSearch />
                </div>
            </div>
        </header>
    );
};

export default Header;
