const { Router } = require('express');
const monsterController = require('../controllers/monsterController');
const { ensureAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/new', ensureAuth, monsterController.getAddMonsterForm);
router.post('/', ensureAuth, monsterController.createMonster);

router.get('/:id', monsterController.showMonsterInfo);
router.get('/', monsterController.getAllMonsters);

router.delete('/:id', ensureAuth, monsterController.deleteMonster);

router.get('/:id/edit', ensureAuth, monsterController.getEditForm);
router.put('/:id', ensureAuth, monsterController.updateMonsterInfo);

module.exports = router;
