const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-description">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="error-return-link">Retournez sur la page d'accueil!</a>
    </div>
  );
};

export default Error404;
