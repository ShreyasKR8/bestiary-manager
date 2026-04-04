const pool = require('./pool');

async function getMonsterTypesData(){
    const { rows } = await pool.query('SELECT * FROM monster_type');
    console.log(rows);
    return rows;
}

async function getMonsterTypes(){
    const { rows } = await pool.query('SELECT name FROM monster_type');
    const monsterTypes = [];
    rows.forEach(row => {
        monsterTypes.push(row.name);
    })
    console.log(monsterTypes);
    return monsterTypes;
}

async function getAllMonsters(){
    const { rows } = await pool.query('SELECT * FROM monsters');
    console.log(rows);
    return rows;
}

async function getMonstersOfType(type){
    const { rows } = await pool.query(`
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

module.exports = {
    getMonsterTypes,
    getAllMonsters,
    getMonstersOfType,
};