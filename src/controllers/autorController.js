import autor from "../models/autor.js";

class autorController{

    //GET

    static listarautor= (req,res)=>{
        autor.find((err,autor)=>{
            res.status(200).json(autor);
        })
    }

    //GET

    static listraautorporID = (req, res)=>{

        const id= req.params.id;

        autor.findById(id,(err,autor)=>{

            if(err){
                res.status(400).send({message : `${err.message}`});
            }
            else{
                res.status(200).send(autor)
            }

        })

    }

    //POST

    static criaautor = (req,res)=>{
        
        let autor1=new autor(req.body)

        autor1.save((err)=>{
            if(err){
                res.status(500).send({message : `${err.message} error on registering book`})
                console.log(`Error on creation, type: ${err}`);
            }
            else{
                res.status(201).send(autor1.toJSON())
            }
        })
    }

    //PUT

    static atualizarautor = (req,res)=>{
        const id = req.params.id;

        autor.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Book updated successfully'});
            }
            else{
                res.status(500).send({message : `${err.message} error on updating book`});
            }
        })
    }

    //DELETE

    static excluirautor = (req,res)=>{
        const id = req.params.id;

        autor.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message : `${err.message} error on deleting book`});
            }
            else{
                res.status(200).send({message:"Book deleted successfully"});
            }
        })
    }

}

export default autorController;