/* Importación de los paquetes necesarios */
import React from "react";
import { Link } from "react-router-dom";
import myImg from "../../img/logo2.png"; /* Importación logo del conjunto */

/* Creación del componente Main */
const Main = () => {
  /* Definición del metodo render() para el componente de clase Main */
    return (
      <div>
        <main
          className="container shadow-lg p-3 mb-5 my-5 
        bg-light border border-success rounded"
        >
          <section id="inicio" className="mb-3">
            <div className="row ">
              <div className="col col-lg-2">
                <img
                  src={myImg} /* Invocación de logo del conjunto */
                  className="img-thumbnail mt-2"
                  alt="dio9ssaas"
                />
              </div>
              <div className="col col-lg-9">
                <h2>
                  ¡BIENVENIDO AL CONJUNTO RESIDENCIAL TORRES DE SANTA ISABEL!
                </h2>
              </div>
            </div>
          </section>
          <section id="servicios" className="mb-5">
            <p className="p-2 border-bottom border-success">
              Estamos encantados de darte la bienvenida a nuestra plataforma
              diseñada para facilitar tu trabajo como portero y administrador.
              Este sistema está especialmente diseñado para proporcionarte las
              herramientas necesarias para gestionar eficientemente las
              operaciones diarias y garantizar la seguridad y comodidad de
              nuestros residentes. Desde esta plataforma, tendrás acceso a
              funciones clave, como el registro de visitantes, residentes y
              residencias, control de parqueadero y salón comunal y la
              comunicación con los residentes. Todo diseñado para simplificar
              tus tareas y optimizar la administración del conjunto residencial.
              Explora todas las funcionalidades que ofrecemos y no dudes en
              ponerte en contacto con nuestro equipo de soporte si necesitas
              ayuda o tienes alguna pregunta. ¡Estamos aquí para ayudarte a
              hacer de nuestro conjunto residencial un lugar aún mejor para
              todos! ¡Bienvenido y gracias por ser parte de nuestro equipo!
            </p>
            <div className="d-flex justify-content-center">
              <p>Ingrese como: </p>
            </div>
            <div class="row justify-content-md-center ">
              <div className="col col-sm-auto ">
                <Link /* Botones para la redirección al formulario de propietario */
                  className="btn btn-success m-0"
                  to="LoginPropietario"
                  role="button"
                >
                  Propietario
                </Link>
              </div>
              <div className="col-md-auto">
                <Link /* Botones para la redirección al formulario de administrador */
                  className="btn btn-danger"
                  to="LoginAdministrador"
                  role="button"
                >
                  Administrador
                </Link>
              </div>
              <div className="col col-md-auto">
                <Link /* Botones para la redirección al formulario de portero */
                  className="btn btn-primary"
                  to="LoginPortero"
                  role="button"
                >
                  Portero
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="text-center py-4">
          <p>© 2024 Mi Página. Todos los derechos reservados.</p>
        </footer>
      </div>
  );
}

export default Main; /* Sentencia para la exportación del modulo 
                          Main al archivo de rutas App.js */
