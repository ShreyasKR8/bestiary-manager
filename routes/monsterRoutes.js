const { Router } = require('express');
const monsterController = require('../controllers/monsterController');

const router = Router();

router.get('/:id', monsterController.showMonsterInfo);

router.get('/', monsterController.getAllMonsters);

module.exports = router;