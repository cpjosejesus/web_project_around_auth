import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Logo del site Around USA" className="header__logo" />
      <div className="header__separator"></div>
    </header>
  );
}

export default Header;
