import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
/* Añadir iconos a la libraria */
library.add(faTrash);
library.add(faPenToSquare);
library.add(faClock);


const Tabla = ({ item, apiS }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  // Datos de ejemplo
  const [data, setDatos] = useState([]);
  useEffect(() => {
    async function fetchApartamentos() {
      try {
        const response = await axios.get(`http://localhost:4000/${apiS}`);
        setDatos(response.data);

        if (response.data.length > 0) {
          console.log("holle");
        } else {
          console.log("Bywe");
        }
      } catch (error) {
        console.error("Error al obtener los apartamentos:", error);
      }
    }

    fetchApartamentos();
  }, [apiS]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // Cálculo del total de páginas
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Cálculo del índice de los registros actuales a mostrar
  return (
    <div className="w-100 h-100">
      <div className="card m-0 h-100">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="card-body">
          <div
            id="example2_wrapper"
            className="dataTables_wrapper dt-bootstrap4"
          >
            <div className="row">
              <div className="col-sm-12">
                <table
                  id="example2"
                  className="table table-bordered table-hover dataTable dtr-inline"
                  aria-describedby="example2_info"
                >
                  <thead>
                    <tr>
                      {item.map((item, index) => (
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example2"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Rendering engine: activate to sort column ascending"
                          key={index}
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {apiS === "Apartamentos"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.CodigoVivienda}</td>
                            <td>{record.NumeroParqueadero}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))
                      : apiS === "Propietarios"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.CodigoVivienda}</td>
                            <td>{record.Nombre}</td>
                            <td>{record.Teléfono}</td>
                            <td>{record.Correo}</td>
                            <td>{record.NumeroDocumento}</td>
                            <td>{record.MesesAtrasados}</td>
                          </tr>
                        ))
                      : apiS === "Parqueadero"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.NumeroEspacio}</td>
                            <td>{record.TipoEspacio}</td>
                            <td>{record.Estado}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))
                      : apiS === "Invitados"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.Nombre}</td>
                            <td>{record.NumeroDocumento}</td>
                            <td>{record.Teléfono}</td>
                            <td>{record.Correo}</td>
                            <td>{record.NumeroParqueadero}</td>
                            <td>{record.Costo}</td>
                            <td>{record.CodigoVivienda}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-3"
                              />
                            </td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))
                      : apiS === "SalonComunal"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.NumeroCita}</td>
                            <td>{record.NombreSolicitante}</td>
                            <td>{record.NumeroDocumento}</td>
                            <td>{record.Teléfono}</td>
                            <td>{record.Fecha}</td>
                            <td>{record.ValorAlquiler}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))
                      : apiS === "Reuniones"
                      ? currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.NumeroReunion}</td>
                            <td>{record.Motivo}</td>
                            <td>{record.Fecha}</td>
                            <td>{record.Horario}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))
                      : currentRecords.map((record, index) => (
                          <tr key={index}>
                            <td>{record.Nombre}</td>
                            <td>{record.NumeroDocumento}</td>
                            <td>{record.Teléfono}</td>
                            <td>{record.Correo}</td>
                            <td>{record.TipoTurno}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-3"
                              />
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                          </tr>
                        ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      {item.map((item, index) => (
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example2"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Rendering engine: activate to sort column ascending"
                          key={index}
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="example2_info"
                  role="status"
                  aria-live="polite"
                >
                  Mostrando {indexOfFirstRecord + 1} a{" "}
                  {indexOfLastRecord > data.length
                    ? data.length
                    : indexOfLastRecord}{" "}
                  de {data.length} registros
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example2_paginate"
                >
                  <ul className="pagination">
                    <li
                      className={`paginate_button page-item previous ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      id="example2_previous"
                    >
                      <Link
                        onClick={() => handlePageChange(currentPage - 1)}
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="0"
                        tabIndex="0"
                        className="page-link"
                      >
                        Anterior
                      </Link>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`paginate_button page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => handlePageChange(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`paginate_button page-item next ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      id="example2_next"
                    >
                      <Link
                        onClick={() => handlePageChange(currentPage + 1)}
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="7"
                        tabIndex="0"
                        className="page-link"
                      >
                        Siguiente
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabla;
