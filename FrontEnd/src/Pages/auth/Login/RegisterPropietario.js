import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import './Logins.css';
import myImg from "../../../img/logo2.png";
import { useNavigate } from "react-router-dom";

const RegisterPropietario = () => {
  const [propietario, setPropietario] = useState({
    Nombre: "",
    Apellido: "",
    NumeroDocumento: "",
    Teléfono: "",
    Correo: "",
    CodigoVivienda: "",
  });

  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();

    try {
      // Solicitud GET para obtener los datos del usuario
      const response = await axios.post(`http://localhost:4000/Solicitudes`, {
        id: propietario.NumeroDocumento,
        Nombre: propietario.Nombre,
        Apellido: propietario.Apellido,
        NumeroDocumento: propietario.NumeroDocumento,
        Teléfono: propietario.Teléfono,
        Correo: propietario.Correo,
        CodigoVivienda: propietario.CodigoVivienda,
      });
      console.log(response.status)
      if (response.status === 201) {
        alert("Solicitud enviada, espere la confirmación del administrador");
        navigate("/")
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al intentar iniciar sesión");
    }
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img src={myImg} alt="Logo" className="logo" />
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Enviar solicitud para creación de cuenta</p>
            <form onSubmit={enviar}>
              <div className="mb-2">
                <input
                  type="text"
                  className="input-group form-control"
                  required
                  placeholder="Nombre"
                  value={propietario.Nombre}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario, 
                      Nombre: e.target.value, 
                    }))
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="input-group form-control"
                  required
                  placeholder="Apellido"
                  value={propietario.Apellido}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario,
                      Apellido: e.target.value, 
                    }))
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="input-group form-control"
                  required
                  placeholder="Numero Documento"
                  value={propietario.NumeroDocumento}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario, 
                      NumeroDocumento: e.target.value, 
                    }))
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="input-group form-control"
                  required
                  placeholder="Numero Telefonico"
                  value={propietario.Teléfono}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario, 
                      Teléfono: e.target.value, 
                    }))
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="input-group form-control"
                  required
                  placeholder="Correo Elecctronico"
                  value={propietario.Correo}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario, 
                      Correo: e.target.value, 
                    }))
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="input-group form-control"
                  required
                  placeholder="Codigo de Vivienda"
                  value={propietario.CodigoVivienda}
                  onChange={(e) =>
                    setPropietario((prevUsuario) => ({
                      ...prevUsuario, 
                      CodigoVivienda: e.target.value, 
                    }))
                  }
                />
              </div>
              <div>
                <p>
                  Adjuntar Foto del Contrato de Propiedad o Certificado de
                  Tradicion y Libertad
                </p>
                <input
                  type="file"
                  id="inputGroupFile04"
                  required
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>

              <div>
                <div>
                  <button type="submit" className="btn btn-success btn-block">
                    Enviar solicitud
                  </button>
                </div>
              </div>
            </form>
            <hr className="hr-line" />
            <p className=" mb-0">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/LoginPropietario" className="text-center">
                Iniciar Sesion
              </Link>
            </p>
            <p className="mb-0">
              ¿Desea ingresar como <Link to="/LoginPortero">Portero</Link> o{" "}
              <Link to="/LoginAdministrador">Administrador</Link>?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPropietario;
