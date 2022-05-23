const { Router } = require('express');

const { handlerCheckout } = require('./checkout.controller')

const router = Router();


router.post('/', handlerCheckout);

module.exports = router;
