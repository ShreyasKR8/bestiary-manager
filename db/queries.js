const pool = require('./pool');

async function logMonsterType(){
    const { rows } = await db.query('SELECT * FROM monster_type');
    console.log(rows);
}

async function logMonsters(){
    const { rows } = await db.query('SELECT * FROM monsters');
    console.log(rows);
}

module.exports = [
    logMonsterType,
    logMonsters,
];