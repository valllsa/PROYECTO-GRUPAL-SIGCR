import { Link, useNavigate } from "react-router-dom";
import myImg from "../../img/logo2.png";

export function NavBar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
      <div className="container px-lg-5">
        <Link className="text-warning navbar-brand" to="#">
          <img src={myImg} style={{ width: 70, height: 70 }} alt="Icon" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <button className="btn btn-light" onClick={handleProfileClick}>
                Perfil 
              </button>
            </li>
            <li className="nav-item mx-3">
              <Link className="btn btn-light" to="/">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
