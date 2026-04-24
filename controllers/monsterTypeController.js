const db = require('../db/queries');

exports.showMonsterTypes = async (req, res) => {
    const monsterTypeId = Number(req.params.typeId);

    if(Number.isNaN(monsterTypeId)){
        return res.status(400).send("Invalid monster type id");
    }

    const monsters = await db.getMonstersOfType(monsterTypeId);
    if(monsters.length == 0){
        return res.status(404).send("monster of type not found");
    }

    res.render('monsters', { monsters: monsters });
}

exports.getAddMonsterTypeForm = async (req, res) => {
    res.render('monsterTypeForm');
}

exports.createMonsterType = async (req, res) => {
    const monsterTypeName = req.body.monsterType;
    const description = req.body.desc;

    await db.postNewMonsterType(monsterTypeName, description);
    
    res.redirect('/');
}