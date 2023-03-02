import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from '../pages/logo-cria.png';;

const Livros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchAllLivros = async () => {
      try {
        const res = await axios.get("http://localhost:8800/livros");
        setLivros(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLivros();
  }, []);

  console.log(livros);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/livros/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
    <div className="logo-img">
    <img src={Logo} alt="logo"></img>
    </div>
      <h1>Cria-Livros, a sua biblioteca favorita!</h1>
      <div className="livros">
        {livros.map((livro) => (
          <div key={livro.id} className="livro">
            <img src={livro.capa} alt="" />
            <h2>{livro.titulo}</h2>
            <p>{livro.sinopse}</p>
            <span><h3>Exemplares</h3>{livro.exemplares}</span>
            <button className="delete" onClick={() => handleDelete(livro.id)}>Excluir</button>
            <button className="update">
              <Link
                to={`/update/${livro.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Atualizar
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Adicione aqui um livro para emprestimo
        </Link>
      </button>
    </div>
  );
};

export default Livros;