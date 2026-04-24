const { Router } = require('express');
const monsterTypeController = require('../controllers/monsterTypeController');
const monsterController = require('../controllers/monsterController');

const monsterRouter = Router();

monsterRouter.get('/:typeId/monsters', monsterTypeController.showMonsterTypes);

monsterRouter.get('/new', monsterTypeController.getAddMonsterTypeForm);

monsterRouter.post('/', monsterTypeController.createMonsterType)

monsterRouter.get('/monsters/:id', monsterController.showMonsterInfo);

module.exports = monsterRouter;