const db = require('../db/queries');

exports.showMonsterInfo = async (req, res) => {
    const monsterId = Number(req.params.id);

    if(Number.isNaN(monsterId)){
        return res.status(400).send("Imvalid monster id");
    }

    const monster = await db.getMonsterById(monsterId);
    if(!monster){
        return res.status(404).send("monster not found");
    }

    res.render('monster', { monster : monster });
}

exports.getAllMonsters = async (req, res) => {
    const monsters = await db.getAllMonsters();

    if(monsters.length == 0) {
        return res.status(404).send("No monsters added");
    }

    res.render('monsters', { monsters: monsters });
}

exports.getAddMonsterForm = async (req, res) => {
    const monsterTypes = await db.getMonsterTypeList();
    res.render('monsterForm', { monsterTypes: monsterTypes });
}

exports.createMonster = async (req, res) => {
    const { name, weaknesses, monsterType } = req.body;
    const monsterTypeId = Number(monsterType);

    if(Number.isNaN(monsterTypeId)){
        return res.status(400).send("Invalid monster type id");
    }

    const monsterData = { name, weaknesses, monsterTypeId };

    await db.postNewMonster(monsterData);

    res.redirect('/');
}