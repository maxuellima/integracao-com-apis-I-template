import React, { useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const headers = { headers: { Authorization: "maxuel-lima-krexu" } };

  const body = {
    name: nome,
    email: email,
  };
  const createUser = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then(() => {
        alert("Usuário cadastrado");
        setEmail("");
        setNome("");
        props.getAllUsers();
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={createUser}>Enviar</button>
    </>
  );
}
export default AddUsuario;
