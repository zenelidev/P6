//import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-div">
        <a href="#" className="header-logo-link">
        <img src={`${process.env.PUBLIC_URL}/LOGO.png`} alt="Kasa Logo" className="logo" />
        </a>
      </div>
      <div className="header-links-div">
        <a href="/" className="header-link">Accueil</a>
        <a href="about" className="header-link">À Propos</a>
      </div>
    </header>
  );
};

export default Header;