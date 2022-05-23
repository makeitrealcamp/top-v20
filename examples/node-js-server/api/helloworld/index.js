const { Router } = require('express');

const { index } = require('./helloworld.controller');

const router = Router();

router.get('/', index)

module.exports = router;
