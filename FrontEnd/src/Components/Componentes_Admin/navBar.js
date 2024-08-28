import { Link } from "react-router-dom";
import myImg from "../../img/logo2.png"; /* Logo del conjutno */
import { useUser } from "../../userContext";
import { useState } from "react";
import Tabla from "./tabla";

export function NavBar() {
  const { setUser: setContextUser } = useUser();
  const [currentTable, setCurrentTable] = useState("Apartamentos");

  return (
    <div className="d-flex flex-column vh-100">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
          <div className="container px-lg-5">
            <Link className="text-warning navbar-brand" to="#">
              <img
                src={myImg}
                style={{ width: 70, height: 70 }}
                alt="Icon"
              ></img>
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
                    className={
                      currentTable === "Solicitudes"
                        ? "btn btn-light active"
                        : "btn btn-light"
                    }
                    aria-current="page"
                    to="#"
                    onClick={() => setCurrentTable("Solicitudes")}
                  >
                    Solicitudes
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link
                    className="btn btn-light"
                    to="#"
                    onClick={() => setCurrentTable("Informacion")}
                  >
                    Enviar información
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link
                    className="btn btn-light"
                    to="#"
                    onClick={() => setCurrentTable("Reporte")}
                  >
                    Generar reporte
                  </Link>
                </li>
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
      </div>
      <div className="h-100">
        <div className="d-flex flex-row h-100">
          <div>
            <div
              className="d-flex flex-column p-3 text-white bg-dark h-100"
              style={{ width: 280 }}
            >
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <Link
                    onClick={() => setCurrentTable("Apartamentos")}
                    id="myLink"
                    href="#"
                    className={
                      currentTable === "Apartamentos"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                    aria-current="page"
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#home" />
                    </svg>
                    Viviendas
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("Propietarios")}
                    href="#"
                    className={
                      currentTable === "Propietarios"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#speedometer2" />
                    </svg>
                    Propietarios
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("Parqueadero")}
                    href="#"
                    className={
                      currentTable === "Parqueadero"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#table" />
                    </svg>
                    Parqueadero
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("Invitados")}
                    href="#"
                    className={
                      currentTable === "Invitados"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#grid" />
                    </svg>
                    Invitados
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("ReservaSalon")}
                    href="#"
                    className={
                      currentTable === "ReservaSalon"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#people-circle" />
                    </svg>
                    Salon Comunal
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("Reuniones")}
                    href="#"
                    className={
                      currentTable === "Reuniones"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#people-circle" />
                    </svg>
                    Reuniones
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setCurrentTable("Porteros")}
                    href="#"
                    className={
                      currentTable === "Porteros"
                        ? "nav-link active"
                        : "nav-link text-white"
                    }
                  >
                    <svg className="bi me-2" width={16} height={16}>
                      <use xlinkHref="#people-circle" />
                    </svg>
                    Porteros
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <Tabla
            item={
              currentTable === "Apartamentos"
                ? ["Codigo de vivienda", "Numero de parquedadero"]
                : currentTable === "Propietarios"
                ? [
                    "Codigo de vivienda",
                    "Nombre",
                    "Teléfono",
                    "Correo",
                    "Numero de Documento",
                    "Meses Atrasados",
                  ]
                : currentTable === "Parqueadero"
                ? ["Numero de Espacio", "Tipo de Espacio", "Estado"]
                : currentTable === "Invitados"
                ? [
                    "Nombre",
                    "Numero de Documento",
                    "Teléfono",
                    "Correo",
                    "Numero de parqueadero",
                    "Costo",
                    "Codigo de Vivienda",
                  ]
                : currentTable === "ReservaSalon"
                ? []
                : currentTable === "Reuniones"
                ? ["Numero de Reunion", "Motivo", "Fecha", "Horario"]
                : currentTable === "Porteros"
                ? [
                    "Nombre",
                    "Numero de Documento",
                    "Teléfono",
                    "Correo",
                    "Tipo de Turno",
                  ]
                : currentTable === "Solicitudes"
                ? []
                : currentTable === "Informacion"
                ? []
                : currentTable === "Reporte"
                ? [
                    "Codigo de vivienda",
                    "Nombre",
                    "Saldo de deuda",
                  ]
                : null
            }
            apiS={currentTable}
          />
        </div>
      </div>
    </div>
  );
}
