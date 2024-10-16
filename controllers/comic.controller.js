import ComicModel from "../models/comic.model.js";

class comicController {

    static createComic = async (req, res) => {

        //console.log(req.body) 

        if (!req.body.bookName || !req.body.authorName) {
            res.send('Enter comic details..')
            return;
        }

        try {
            const exist = await ComicModel.findOne({ bookName: req.body.bookName })
            if (exist) {
                res.send({ message: "Comic already exist." });
                return;
            }
            const doc = new ComicModel(req.body);
            const result = await doc.save();
            res.send(result);
        }
        catch (error) {
            res.send({ message: "Unexcepted error.",error});
            return;
        }
    }

    static editComic = async (req, res) => {
        console.log(req.params.id)
        const { id } = req.params
        try {

            const exist = await ComicModel.findOne({ _id: id })
            if (!exist) {
                res.send({ message: "Comic does not exist." })
                return;
            }

            const result = await ComicModel.findByIdAndUpdate(id, req.body)
            res.send({ message: "Comic details updated." })

        } catch (error) {
            res.send({ message: "Unexcepted error occur.",error})
        }
    }

    static deleteComic = async (req, res) => {
        const { id } = req.params
        try {
            const exist = await ComicModel.findOne({ _id: id })
            if (!exist) {
                res.send({ message: "Comic does not exist." })
                return;
            }

            const result = await ComicModel.findByIdAndDelete(id)
            res.send({ message: "Comic deleted." })
        } catch (error) {
             res.send({message:"Unexcepted error occur.",error})
        }
    }

    static getAllComic = async(req, res) => {
        try {
            const comics = await ComicModel.find()
            if(comics.length == 0){
                res.send({message:"No Comic available."})
                return;
            }
            res.send(comics)
        } catch (error) {
            res.send({message:"Unexcepted error occur.",error}) 
        }
    }

    static getComicByAuthor = async(req,res) => {
        const {author} = req.body
        try {
            const comics = await ComicModel.find({authorName:author})
            if(comics.length == 0){
                res.send({message:"No Comic available of given author."})
                return;
            }
            res.send(comics)
        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static getComicByYear = async(req,res) => {
        const {from ,to} = req.body
        try {
            const comics = await ComicModel.find({yop:{$gte:from , $lte:to}})
            if(comics.length == 0){
                res.send({message:"No Comic available of given year."})
                return;
            }
            res.send(comics)
        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static getComicByPrice = async(req,res) => {
        const {from ,to} = req.body
        try {
            const comics = await ComicModel.find({price:{$gte:from , $lte:to}})
            if(comics.length == 0){
                res.send({message:"No Comic available of given price range."})
                return;
            }
            res.send(comics)
        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static sortByPrice = async(req,res) => {
    
        try {
            
            const comics = await ComicModel.find().sort({price:1});
            if(comics.length == 0){
                res.send({message:"No Comic available of given price range."})
                return;
            }
            res.send(comics)

        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static sortByYear = async(req,res) => {
    
        try {
            
            const comics = await ComicModel.find().sort({yop:1});
            if(comics.length == 0){
                res.send({message:"No Comic available of given price range."})
                return;
            }
            res.send(comics)

        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static sortByName = async(req,res) => {
    
        try {
            
            const comics = await ComicModel.find().sort({bookName:1});
            if(comics.length == 0){
                res.send({message:"No Comic available of given price range."})
                return;
            }
            res.send(comics)

        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

    static getComicById = async(req,res) => {
        const {id} = req.params 
        try {
            const comic = await ComicModel.findById(id)
            if (!comic){
                res.send({ message: "Comic does not exist." })
                return;
            }
            res.send(comic);
        } catch (error) {
            res.send({message:"Unexcepted error occur.",error})
        }
    }

}

export default comicController;