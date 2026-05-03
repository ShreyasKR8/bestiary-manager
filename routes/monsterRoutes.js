const { Router } = require('express');
const monsterController = require('../controllers/monsterController');

const router = Router();

router.get('/new', monsterController.getAddMonsterForm);
router.post('/', monsterController.createMonster);

router.get('/:id', monsterController.showMonsterInfo);
router.get('/', monsterController.getAllMonsters);

router.delete('/:id', monsterController.deleteMonster);

router.get('/:id/edit', monsterController.getEditForm);
router.post('/:id', monsterController.updateMonsterInfo);

module.exports = router;
