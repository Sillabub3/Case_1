import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Add = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    sinopse: "",
    exemplares: null,
    capa: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/livros", livro);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Adicione o seu livro aqui!</h1>
      <input
        type="text"
        placeholder="Livro titulo"
        name="titulo"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="livro sinopse"
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
      <button onClick={handleClick}>Adicionar</button>
      {error && "Alguma coisa está errada!"}
      <Link to="/">Veja todos os livros disponiveis</Link>
    </div>
  );
};

export default Add;