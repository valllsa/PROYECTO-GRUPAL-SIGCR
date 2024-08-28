import { Link } from "react-router-dom";
import Tabla from "./tabla";
import { useState } from "react";

const SideBar = () => {
    const [currentTable, setCurrentTable] = useState("Invitados");
  return (
    <>
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
                  onClick={() => setCurrentTable("Invitados")}
                  id="myLink"
                  href="#"
                  className={
                    currentTable === "Invitados"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                  aria-current="page"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#home" />
                  </svg>
                  Invitados
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
            </ul>
            <hr />
          </div>
        </div>
        <Tabla
          item={
            currentTable === "Invitados"
              ? ["Nombre", "Numero de Documento", "Teléfono", "Correo"]
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
              : currentTable === "SalonComunal"
              ? [
                  "Numero de Cita",
                  "Nombre del solicitante",
                  "Numero de Documento",
                  "Teléfono",
                  "Fecha",
                  "Valor del Alquiler",
                ]
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
              : ["Nombre", "Numero de Documento", "Teléfono", "Correo"]
          }
          apiS={currentTable}
        />
      </div>
    </>
  );
};

export default SideBar;
