const express = require('express');
const MidiaController = require ('../controllers/midiaController');
const router = express.Router();

router.post('/midias', MidiaController.Insert);
router.get('/midias', MidiaController.SearchAll);
router.get('/midias/:id', MidiaController.SearchOne);
router.put('/midias/:id', MidiaController.Update);
router.delete('/midias/:id', MidiaController.Delete);

module.exports = router;