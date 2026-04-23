const db = require('../db/queries');

exports.getAddMonsterTypeForm = async (req, res) => {
    res.render('monsterTypeForm');
}

exports.createMonsterType = async (req, res) => {
    const monsterTypeName = req.body.monsterType;
    const description = req.body.desc;

    await db.postNewMonsterType(monsterTypeName, description);
    
    res.redirect('/');
}