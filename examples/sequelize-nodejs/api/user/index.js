const { Router } = require('express')

const {
  index,
  show,
  create,
  update,
  destroy,
  getAllWithPosts,
} = require('./user.controller')

const router = new Router()

router.get('/', index)
router.post('/', create)
router.get('/:id', show)
router.delete('/:id', destroy)
router.patch('/:id', update)
router.get('/:id/posts', getAllWithPosts)

module.exports = router
