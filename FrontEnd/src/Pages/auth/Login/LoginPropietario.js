import { useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Logins.css";
import myImg from "../../../img/logo2.png";
import { useUser } from "../../../userContext";

const LoginPropietario = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser: setContextUser } = useUser();
  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();

    try {
      // Solicitud GET para obtener los datos del usuario
      const response = await axios.get(
        `http://localhost:4000/Propietarios?User=${Username}`
      );

      if (response.data.length > 0) {
        const usuario = response.data[0];

        if (usuario.Pass === Password) {
          alert("Éxito al iniciar sesión");
          setContextUser(usuario); // Actualizar el contexto con el usuario
          navigate("/MainPropietario");
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
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img src={myImg} alt="Logo" className="logo" />
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">LOGIN PROPIETARIO</p>

            <form onSubmit={enviar}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuario"
                  name="Username"
                  required
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
                  className="form-control"
                  placeholder="Contraseña"
                  name="Pass"
                  required
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
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuerdame</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-success btn-block">
                    Ingresar
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
            </p>
            <hr className="hr-line" />
            <p className="mb-0">
              ¿No tienes una cuenta?{" "}
              <Link to="/RegisterPropieterio" className="text-center">
                Enviar solicitud para creación de cuenta
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

export default LoginPropietario;
