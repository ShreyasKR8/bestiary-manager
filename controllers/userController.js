
const db = require('../db/queries');

exports.showHomePage = async (req, res) => {
    const monsterTypes = await db.getMonsterTypes();
    console.log(monsterTypes);
    res.render("index", {title: 'Witcher Bestiary', monsterTypes: monsterTypes});
}