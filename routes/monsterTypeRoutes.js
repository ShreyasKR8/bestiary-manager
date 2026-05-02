const { Router } = require('express');
const monsterTypeController = require('../controllers/monsterTypeController');
const monsterController = require('../controllers/monsterController');

const router = Router();

router.get('/:typeId/monsters', monsterTypeController.showMonstersOfType);

router.get('/new', monsterTypeController.getAddMonsterTypeForm);

router.post('/', monsterTypeController.createMonsterType)

router.get('/monsters/:id', monsterController.showMonsterInfo);

router.delete('/:id', monsterTypeController.deleteMonsterType);

module.exports = router;