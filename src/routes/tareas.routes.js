const {Router} = require('express');
const router = Router();
const {createTarea, getTarea, getTareas, updateTarea, deleteTarea, taskCompleted} = require('../controllers/tareas.controller');

// rest APi Tasks
router.get('/', getTareas);
router.get('/:id', getTarea);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);
router.put('/task-completed/:id', taskCompleted);

module.exports = router;