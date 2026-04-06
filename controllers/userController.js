
const db = require('../db/queries');

exports.showHomePage = async (req, res) => {
    const monsterTypesData = await db.getMonsterTypesData();
    // console.log(monsterTypesData);
    res.render("index", {title: 'Witcher Bestiary', monsterTypes: monsterTypesData});
}

exports.showCategory = async (req, res) => {
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