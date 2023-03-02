import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3307",
    password:"",
    database:"cria-livros"
});

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.json('Olá')
});

app.get('/livros', (req,res)=>{
    const q = "SELECT * FROM livros"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

app.post('/livros', (req,res)=>{
    const q = "INSERT INTO livros (`titulo`, `sinopse`, `capa`,`exemplares`) VALUES (?)"
    const values = [
        req.body.titulo,
        req.body.sinopse,
        req.body.capa,
        req.body.exemplares
    ]

    db.query(q,[values], (err, data)=>{
        if (err) return res.json(err);
        return res.json("Livro adicionado com sucesso")
    });
});

app.delete("/livros/:id", (req, res) => {
    const livroId = req.params.id;
    const q = " DELETE FROM livros WHERE id = ? ";
  
    db.query(q, [livroId], (err, data) => {
      if (err) return res.send(err);
      return res.json("Livro deletado com sucesso");
    });
  });
  
  app.put("/livros/:id", (req, res) => {
    const livroId = req.params.id;
    const q = "UPDATE livros SET `titulo`= ?, `sinopse`= ?, `capa`= ?, `exemplares`= ? WHERE id = ?";
  
    const values = [
        req.body.titulo,
        req.body.sinopse,
        req.body.capa,
        req.body.exemplares
    ];
  
    db.query(q, [...values,livroId], (err, data) => {
      if (err) return res.send(err);
      return res.json("Livro atualizado com sucesso");
    });
  });

app.listen(8800, ()=>{
    console.log('Conectado ao Banco de Dados')
})