import { useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Logins.css";
import myImg from "../../../img/logo2.png";
import { useUser } from "../../../userContext";

const LoginAdministrador = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser: setContextUser } = useUser();
  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();

    try {
      // Solicitud GET para obtener los datos del usuario
      const response = await axios.get(
        `http://localhost:4000/Administrador?User=${Username}`
      );

      if (response.data.length > 0) {
        const usuario = response.data[0];

        if (usuario.Pass === Password) {
          alert("Éxito al iniciar sesión");
          setContextUser(usuario); // Actualizar el contexto con el usuario
          navigate("/MainAdmin");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al intentar iniciar sesión");
    }
  };
  return (
    <div className="login-administrador">
      <div className="login-page">
        <div className="login-box">
          <div className="d-flex align-items-center flex-sm-column my-3">
            <div className="w-25">
              <Link to="/" className="text-decoration-none">
                <img src={myImg} alt="Logo" className="logo" />
                <span className="fs-6">Volver al inicio</span>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">LOGIN ADMINISTRADOR</p>

              <form onSubmit={enviar}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Usuario"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    required
                    className="form-control"
                    placeholder="Contraseña"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-danger btn-block">
                      Ingresar
                    </button>
                  </div>
                </div>
              </form>

              <p className="mb-1">
                <Link to="/forgot-password" className="text-decoration-none">
                  ¿Has olvidado tu contraseña?
                </Link>
              </p>
              <p className="mb-0">
                ¿Desea ingresar como{" "}
                <Link to="/LoginPropietario" className="text-decoration-none">
                  Propietario
                </Link>{" "}
                o{" "}
                <Link to="/LoginPortero" className="text-decoration-none">
                  Portero
                </Link>
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdministrador;
