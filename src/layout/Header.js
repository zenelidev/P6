import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
        <div className="header-logo-div">
        <a href="/" className="header-logo-link">
        <img src={`${process.env.PUBLIC_URL}/LOGO.png`} alt="Kasa Logo" className="logo" />
        </a>
      </div>
      <div className="header-links-div">
        <a href="/" className="header-link">Accueil</a>
        <Link to="about" className="header-link">À Propos</Link>
      </div>
    </header>
  );
};

export default Header;