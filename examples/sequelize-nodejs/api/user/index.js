const { Router } = require('express')

const {
  index,
  show,
  create,
  update,
  destroy,
} = require('./user.controller')

const router = new Router()

router.get('/', index)
router.post('/', create)
router.get('/:id', show)
router.delete('/:id', destroy)
router.patch('/:id', update)

module.exports = router
