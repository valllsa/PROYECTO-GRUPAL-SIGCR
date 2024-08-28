import React from 'react';
import { useUser } from '../../../userContext';
import { NavBar } from '../../../Components/Componentes_Propietario/navBar';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Asegúrate de que el archivo CSS esté importado

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate(); // Hook para navegación

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="profile-title">Mi Perfil</h1>
          <button className="btn btn-secondary" onClick={handleGoBack}>Volver</button>
        </div>
        <div className="profile-info">
          <p><strong>Nombre:</strong> {user.Nombre}</p>
          <p><strong>Teléfono:</strong> {user.Teléfono}</p>
          <p><strong>Correo:</strong> {user.Correo}</p>
          <p><strong>Numero Documento:</strong> {user.NumeroDocumento}</p>
          <p><strong>Meses Atrasados:</strong> {user.MesesAtrasados}</p>
          <p><strong>Espacios Parqueadero:</strong> {user.EspacioParqueadero}</p>
          <p><strong>Código Vivienda:</strong> {user.CodigoVivienda}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
