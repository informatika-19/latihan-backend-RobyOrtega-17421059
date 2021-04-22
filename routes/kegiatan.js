const router = require('express').Router()
const kegiatanController = require('../controller/kegiatan')

router.post('/insert', (req, res)=> {
  kegiatanController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getAll', (req, res)=> {
  kegiatanController.showAllData(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})


router.get('/getdatabyId/:id', (req, res)=> {
  kegiatanController.menampilkanDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})



router.put('/edit/:id', (req, res)=> {
  kegiatanController.edit(req.body, req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})


router.delete('/hapus/:id', (req, res)=> {
  kegiatanController.hapus(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router
