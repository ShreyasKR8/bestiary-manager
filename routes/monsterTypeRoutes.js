const { Router } = require('express');
const monsterTypeController = require('../controllers/monsterTypeController');
const monsterController = require('../controllers/monsterController');
const { ensureAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/:id/monsters', monsterTypeController.showMonstersOfType);

router.get('/new', ensureAuth, monsterTypeController.getAddMonsterTypeForm);

router.post('/', ensureAuth, monsterTypeController.createMonsterType);

router.get('/monsters/:id', monsterController.showMonsterInfo);

router.get('/:id/edit', ensureAuth, monsterTypeController.getEditMonsterTypeForm);

router.put('/:id', ensureAuth, monsterTypeController.updateMonsterTypeInfo);

router.delete('/:id', ensureAuth, monsterTypeController.deleteMonsterType);

module.exports = router;