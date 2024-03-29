const express = require('express');
const router = express.Router();
const mainController = require('../app/controllers/main');
const areaController = require('../app/controllers/area');
const cursoController = require('../app/controllers/curso');

// MainController
router.get('/', mainController.index);
router.get('/sobre', mainController.sobre);
router.get('/ui', mainController.ui);
router.get('/game', mainController.game);

// AreaController
router.get('/area', areaController.index);

// CursoController
router.get('/curso/create', cursoController.create);
router.post('/curso/create', cursoController.create);

router.get('/curso', cursoController.index);
router.get('/curso/:id', cursoController.read);

router.get('/curso/update/:id', cursoController.update);
router.post('/curso/update/:id', cursoController.update);

router.get('/curso/remove/:id', cursoController.remove);

module.exports = router;
