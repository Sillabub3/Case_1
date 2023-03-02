import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    sinopse: "",
    exemplares: null,
    capa: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const livroId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/livros/${livroId}`, livro);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Atualize os livros disponiveis</h1>
      <input
        type="text"
        placeholder="Livro titulo"
        name="titulo"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Livro sinopse"
        name="sinopse"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Livro exemplares"
        name="exemplares"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Livro capa"
        name="capa"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Atualizar</button>
      {error && "Alguma coisa deu errado!"}
      <Link to="/">Veja todos os livros disponiveis</Link>
    </div>
  );
};

export default Update;