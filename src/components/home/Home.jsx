import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ModalUser from "./modalUser/ModalUser";
import { consultarUsuarios, isAuth } from "../../api/Rule_auth";

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [flag, setFlag] = useState(false);
  const [handleModalFormUser, setHandleModalFormUser] = useState(false);

  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    await consultarUsuarios()
      .then((response) => {
        setUsuarios(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  /*   const onClickTelefonos = async () => {
    await obtenerTelefonos()
      .then((response) => {
        setTelefonos(response);
      })
      .catch((error) => {
        alert(error);
      });
  }; */

  useEffect(() => {
    if (!isAuth()) {
      alert("No posee los permisos para acceder a esta sección");
      navigate("../");
      return;
    }
    buscarUsuarios();
  }, [flag]);

  return (
    <div>
      <ModalUser
        show={handleModalFormUser}
        handleClose={() => {
          setHandleModalFormUser(false);
          setFlag(!flag);
        }}
      />

      <nav className="nav">
        <ul className="nav-list">
          {/* ---------------Lista de usuarios--------------- */}
          <li className="nav-item">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lista de usuarios</Accordion.Header>
                <Accordion.Body>
                  {usuarios &&
                    usuarios.map((usuario) => {
                      return (
                        <div key={usuario.id}>
                          <p>{usuario.email}</p>
                        </div>
                      );
                    })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
          <li className="nav-item">
            {/* ---------------Registrar un nuevo usuario--------------- */}
            <Button
              variant="outline-dark"
              onClick={() => {
                setHandleModalFormUser(true);
              }}
            >
              Registrar un usuario
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
