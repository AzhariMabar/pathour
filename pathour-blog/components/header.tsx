export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparant ftco_navbar ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
          <img id="logos" src="/images/Logos/logo-white.png" style={{ width: '45px' }} alt="" />
          <a className="navbar-brand" href="/">PATHOUR<span>Find your path</span></a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/destination" className="nav-link">Destination</a></li>
            <li className="nav-item"><a href="/hotel" className="nav-link">Rental</a></li>
            <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
