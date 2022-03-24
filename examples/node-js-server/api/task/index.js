const { Router } = require('express');

const {
  handlerAllTask,
  handlerOneTask,
  handlerDeleteTask,
  handlerCreateTask,
  handlerUpdateTask,
} = require('./task.controller')

const router = Router();

router.get('/', handlerAllTask)
router.get('/:id', handlerOneTask)
router.delete('/:id', handlerDeleteTask)
router.post('/', handlerCreateTask)
router.patch('/:id', handlerUpdateTask)

module.exports = router;
