const { findOne } = require('../model/kegiatan')
const kegiatanModel = require('../model/kegiatan')
const objectId = require('mongoose').Types.ObjectId
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    //kegiatanModel.create() fungsi untuk menyimpan kegiatan yang di imput
    kegiatanModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'berhasil iput'
      })).catch(()=> ({
        status : false,
        pesan : 'gagal iput'
      }))
  })

  exports.showAllData= () =>
  new Promise((resolve, reject)=> {
    //kegiatanModel.create() fungsi untuk menyimpan kegiatan yang di imput
    kegiatanModel.find()
      .then(result => {
        resolve({
          status: true,
          pesan: 'Berhasil menampilkan data',
          data: result
        })
      })
  }).catch(() => console.log(reject({
    status: false,
    pesan: 'gagal menampilkan data',
    data:  []
  })))


  exports.menampilkanDataById = (id) =>
  new Promise((resolve, reject) => {
    kegiatanModel.findOne({
      _id: objectId(id)
    }).then((data) => {
      resolve(data)
    }).catch(() => reject({
      sukses: false,
      pesan: 'gagal mendapatkan data'
    }))
  })
 
  exports.hapus = ( id) =>
  new Promise((resolve, reject) => {
    kegiatanModel.deleteOne({
      _id: objectId(id)
    }).then(() => {
      resolve({
        sukses: true,
        pesan: 'berhasil hapus'
      })
    }).catch(() => {
      reject({
        sukses: true,
        pesan: 'gagal hapus'
      })
    })
  })

