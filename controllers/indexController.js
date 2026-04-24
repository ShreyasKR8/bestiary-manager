
const db = require('../db/queries');

exports.showHomePage = async (req, res) => {
    const monsterTypesData = await db.getMonsterTypesData();
    // console.log(monsterTypesData);
    res.render("index", {title: 'Witcher Bestiary', monsterTypes: monsterTypesData});
}