const pool = require('./pool');

async function logMonsterType(){
    const { rows } = await db.query('SELECT * FROM monster_type');
    console.log(rows);
}

async function logMonsters(){
    const { rows } = await db.query('SELECT * FROM monsters');
    console.log(rows);
}

async function getMonstersOfType(type){
    const { rows } = await db.query(`
        SELECT m.*
        FROM monsters m
        JOIN monster_type mt ON
        m.monster_type_id = mt.id
        WHERE mt.name = $1`,
        [type]
    );

    console.log(rows);
    return rows;
}

module.exports = [
    logMonsterType,
    logMonsters,
    getMonstersOfType,
];