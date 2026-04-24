const { Router } = require('express');
const monsterController = require('../controllers/monsterController');

const router = Router();

router.get('/:id', monsterController.showMonsterInfo);

module.exports = router;