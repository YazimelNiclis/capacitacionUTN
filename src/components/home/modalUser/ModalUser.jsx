import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { registrarUsuario } from "../../../api/Rule_auth";
import "./style.css";

function ModalUser({ show, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await registrarUsuario(data)
      .then(() => {
        alert("Usuario creado correctamente");
        handleClose();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar un nuevo usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
          {/* ---------------Email--------------- */}
          <label htmlFor="Correo" className="item">
            <br />
            <h5>Email *</h5>
            <input
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />

            {errors.email?.type === "required" && <div>Email is required</div>}
            {errors.email?.type === "pattern" && (
              <div>Se requiere un formato valido de email</div>
            )}
          </label>
          <br />
          {/* ---------------Password--------------- */}
          <label htmlFor="Password" className="item">
            <br />
            <h5>Password *</h5>
            <input
              type="password"
              placeholder="Password*"
              {...register("password", { required: true, minLength: 8 })}
            />

            {errors.password?.type === "required" && (
              <div>Password is required</div>
            )}
            {errors.password?.type === "minLength" && (
              <div>Se precisa un minimo de 8 caracteres</div>
            )}
          </label>
          <br />
          {/* ---------------Nombre--------------- */}
          <label htmlFor="Nombre" className="item">
            <br />
            <h5>Nombre</h5>
            <input type="text" placeholder="Nombre" {...register("nombre")} />
          </label>
          <br />
          <br />

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;
