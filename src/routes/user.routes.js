const {Router} = require('express');
const router = Router();
const {getUSers, getUSer, createUSer, updateUSer, deleteUSer, bajaUSer, altaUSer} = require('../controllers/user.controller');

//rest api users
router.get('/', getUSers);
router.get('/:id', getUSer);
router.post('/', createUSer);
router.put('/:id', updateUSer);
router.delete('/:id', deleteUSer);
router.put('/baja-user/:id', bajaUSer);
router.put('/alta-user/:id', altaUSer);

module.exports = router;