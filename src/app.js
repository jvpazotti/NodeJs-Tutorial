import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js"
import routes from "./routes/index.js"
db.on('error',console.log.bind(console,"Connection Error"));

db.once('open',()=>{
    console.log('Database connected sucessfully');
})

const app = express();

app.use(express.json());

routes(app);

app.get('/',(req,res)=>{
    res.status(200).send('Curso de Node');
}
)


app.get('/livros/:id',(req,res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros',(req,res)=>{
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id==id)
}

app.put('/livros/:id',(req,res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo=req.body.titulo;
    res.json(livros);
})


app.delete('/livros/:id',(req,res)=>{
    let index = buscaLivro(req.params.id);
    livros.splice(index,1)
    res.send(`Foi deletado o livro com ID ${req.params.id}`)
})


export default app;