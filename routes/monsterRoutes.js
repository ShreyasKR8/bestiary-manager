const { Router } = require('express');
const monsterController = require('../controllers/monsterController');

const router = Router();

router.get('/new', monsterController.getAddMonsterForm);
router.get('/:id', monsterController.showMonsterInfo);
router.get('/', monsterController.getAllMonsters);
router.post('/', monsterController.createMonster);
router.delete('/:id', monsterController.deleteMonster);

module.exports = router;
