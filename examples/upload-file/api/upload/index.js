const { Router } = require('express');
const multer  = require('multer');

const { uploadSigleHandler } = require('./upload.controller')

const router = Router();

const upload = multer({ dest: './temp' })

router.post('/image', upload.single('file'),  uploadSigleHandler)

module.exports = router;
