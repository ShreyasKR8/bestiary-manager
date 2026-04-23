const pool = require('./pool');

async function getMonsterTypesData(){
    const { rows } = await pool.query('SELECT * FROM monster_type');
    // console.log(rows);
    return rows;
}

async function getMonsterTypes(){
    const { rows } = await pool.query('SELECT name FROM monster_type');
    const monsterTypes = [];
    rows.forEach(row => {
        monsterTypes.push(row.name);
    })
    // console.log(monsterTypes);
    return monsterTypes;
}

async function getAllMonsters(){
    const { rows } = await pool.query('SELECT * FROM monsters');
    // console.log(rows);
    return rows;
}

async function getMonstersOfType(typeId){
    const { rows } = await pool.query(
        `SELECT *
        FROM monsters
        WHERE monster_type_id = $1`,
        [typeId]
    );

    // console.log(rows);
    return rows;
}

async function getMonsterById(id){
    const { rows } = await pool.query(
        `SELECT * 
        FROM monsters
        WHERE id = $1`,
        [id]
    );

    return rows[0];
}

async function postNewMonsterType(monsterType, desc) {
    await pool.query(`
        INSERT INTO monster_type (name, description)
        VALUES ($1, $2)`, 
        [monsterType, desc]);
}

module.exports = {
    getMonsterTypes,
    getAllMonsters,
    getMonstersOfType,
    getMonsterTypesData,
    getMonsterById,
    postNewMonsterType,
};