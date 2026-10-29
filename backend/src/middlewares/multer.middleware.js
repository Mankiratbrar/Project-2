import multer from 'multer'

const crypto = require('crypto')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + crypto.randomUUIDv7)
    }})
  

const upload = multer({ storage,})