import livros from "../models/livro.js";

class LivroController{

    //GET

    static listarLivros= (req,res)=>{
        livros.find((err,livros)=>{
            res.status(200).json(livros);
        })
    }

    //GET

    static listraLivroporID = (req, res)=>{

        const id= req.params.id;

        livros.findById(id,(err,livros)=>{

            if(err){
                res.status(400).send({message : `${err.message}`});
            }
            else{
                res.status(200).send(livros)
            }

        })

    }

    //POST

    static criaLivro = (req,res)=>{
        let livro=new livros(req.body)

        livro.save((err)=>{
            if(err){
                res.status(500).send({message : `${err.message} error on registering book`})
                console.log(`Error on creation, type: ${err}`);
            }
            else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    //PUT

    static atualizarLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Book updated successfully'});
            }
            else{
                res.status(500).send({message : `${err.message} error on updating book`});
            }
        })
    }

    //DELETE

    static excluirLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message : `${err.message} error on deleting book`});
            }
            else{
                res.status(200).send({message:"Book deleted successfully"});
            }
        })
    }

}

export default LivroController;