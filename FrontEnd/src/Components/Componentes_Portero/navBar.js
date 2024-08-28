import { Link } from "react-router-dom";
import myImg from "../../img/logo2.png"; /* Logo del conjutno */
import { useUser } from "../../userContext";

export function NavBar() {
  const { setUser: setContextUser } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
      <div className="container px-lg-5">
        <Link className="text-warning navbar-brand" to="#">
          <img src={myImg} style={{ width: 70, height: 70 }} alt="Icon"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navConetent"
          aria-controls="navConetent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navConetent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link
                onClick={() => setContextUser(null)}
                className="btn btn-light"
                to="/"
              >
                Cerrar Sesion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
