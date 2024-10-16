import express from 'express'
import comicController from '../controllers/comic.controller.js'

const router = express.Router()

router.post('/createComic',comicController.createComic)
router.put('/editComic/:id',comicController.editComic)
router.delete('/deleteComic/:id',comicController.deleteComic)
router.get('/allComic',comicController.getAllComic)
router.post('/getComicByAuthor',comicController.getComicByAuthor)
router.post('/getComicByYear',comicController.getComicByYear)
router.post('/getComicByPrice',comicController.getComicByPrice)
router.get('/sortByPrice',comicController.sortByPrice)
router.get('/sortByYear',comicController.sortByYear)
router.get('/sortByName',comicController.sortByName)
router.get('/getComicById/:id',comicController.getComicById)


export default router;