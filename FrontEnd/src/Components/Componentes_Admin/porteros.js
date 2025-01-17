import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
/* Añadir iconos a la libraria */
library.add(faTrash);
library.add(faPenToSquare);
library.add(faSquarePlus);

const Porteros = ({ item, currentRecords, apiS }) => {
  const [accion, setAccion] = useState("");

  const [porteros, setPorteros] = useState({
    Nombre: "",
    NumeroDocumento: "",
    Teléfono: "",
    Correo: "",
    TipoTurno: "",
    User: "",
    Pass: "",
    id: "",
  });

  const enviar = async (e) => {
    e.preventDefault();

    try {
      if (accion === "Actualizar") {
        if (porteros.id) {
          const response = await axios.patch(
            `http://localhost:4000/${apiS}/${porteros.id}`,
            {
              Nombre: porteros.Nombre,
              NumeroDocumento: porteros.NumeroDocumento,
              Teléfono: porteros.Teléfono,
              Correo: porteros.Correo,
              TipoTurno: porteros.TipoTurno,
              User: porteros.User,
              Pass: porteros.Pass,
              id: porteros.id,
            }
          );
          console.log(response.status);
          if (response.status === 200) {
            alert("Registro actualizado exitosamente");
            setPorteros((prevUsuario) => ({
              ...prevUsuario,
              id: "",
            }));
          }
        }
      } else if (accion === "Eliminar") {
        if (porteros.id) {
          const response = await axios.delete(
            `http://localhost:4000/${apiS}/${porteros.id}`
          );
          console.log(response.status);
          if (response.status === 200) {
            alert("Registro eliminado exitosamente exitosamente");
          }
        }
      } else if (accion === "Insertar") {
        const response = await axios.post(`http://localhost:4000/${apiS}`, {
          Nombre: porteros.Nombre,
          NumeroDocumento: porteros.NumeroDocumento,
          Teléfono: porteros.Teléfono,
          Correo: porteros.Correo,
          TipoTurno: porteros.TipoTurno,
          User: porteros.User,
          Pass: porteros.Pass,
        });
        console.log(response.status);
        if (response.status === 201) {
          alert("Registro exitoso");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al realizar la operación");
    }
  };

  const setCurrentAccion = (accion) => {
    setAccion(() => accion);
  };

  const eliminar = (record) => {
    const confir = window.confirm("¿ Desea eliminar este registro ?");
    if (confir) {
      if (apiS === "Porteros") {
        setPorteros((prevSalon) => ({
          ...prevSalon,
          id: record,
        }));
      }
      setAccion(() => "Eliminar");
    }
  };

  return (
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
          <th
            className="sorting"
            tabIndex="0"
            aria-controls="example2"
            rowSpan="1"
            colSpan="1"
            aria-label="Platform(s): activate to sort column ascending"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {currentRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.Nombre}</td>
            <td>{record.NumeroDocumento}</td>
            <td>{record.Teléfono}</td>
            <td>{record.Correo}</td>
            <td>{record.TipoTurno}</td>
            <td>
              <div className="d-flex flex-row">
                <div className="mx-2">
                  <form className="p-0" onSubmit={enviar}>
                    <button
                      onClick={() => eliminar(record.id)}
                      type="submit"
                      class="btn btn-danger px-2"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </form>
                </div>
                <div className="mx-2">
                  <button
                    type="button"
                    className="btn btn-warning px-2 py-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      setPorteros((prevPorteros) => ({
                        ...prevPorteros,
                        Nombre: record.Nombre,
                        NumeroDocumento: record.NumeroDocumento,
                        Teléfono: record.Teléfono,
                        Correo: record.Correo,
                        TipoTurno: record.TipoTurno,
                        User: record.User,
                        Pass: record.Pass,
                        id: record.id,
                      }))
                    }
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        {accion} Porteros
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form onSubmit={enviar}>
                      <div class="modal-body">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.Nombre}
                            onChange={(e) =>
                              setPorteros((prevPorteros) => ({
                                ...prevPorteros,
                                Nombre: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Numero de Documento
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.NumeroDocumento}
                            onChange={(e) =>
                              setPorteros((prevPorteros) => ({
                                ...prevPorteros,
                                NumeroDocumento: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Teléfono
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.Teléfono}
                            onChange={(e) =>
                              setPorteros((prevPorteros) => ({
                                ...prevPorteros,
                                Teléfono: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Correo
                          </label>
                          <input
                            type="mail"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.Correo}
                            onChange={(e) =>
                              setPorteros((prevPorteros) => ({
                                ...prevPorteros,
                                Correo: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Tipo de Turno
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.TipoTurno}
                            onChange={(e) =>
                              setPorteros((prevPorteros) => ({
                                ...prevPorteros,
                                TipoTurno: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            User
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.User}
                            onChange={(e) =>
                              setPorteros((prevReuniones) => ({
                                ...prevReuniones,
                                User: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Contraseña
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                            value={porteros.Pass}
                            onChange={(e) =>
                              setPorteros((prevReuniones) => ({
                                ...prevReuniones,
                                Pass: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="submit"
                          className={
                            accion === "Actualizar"
                              ? "btn btn-warning"
                              : accion === "Insertar"
                              ? "btn btn-success w-25 m-0"
                              : null
                          }
                        >
                          {accion}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="5"></th>
          <th rowSpan="1" colSpan="1">
            <button
              type="button"
              className="btn btn-success p-0 m-0 w-50"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                setPorteros((prevReuniones) => ({
                  ...prevReuniones,
                  Nombre: "",
                  NumeroDocumento: "",
                  Teléfono: "",
                  Correo: "",
                  TipoTurno: "",
                  User: "",
                  Pass: "",
                }));
                setCurrentAccion("Insertar");
              }}
            >
              <FontAwesomeIcon icon={faSquarePlus} />
            </button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Porteros;
