const pool = require('./pool');

async function getMonsterTypesData(){
    const { rows } = await pool.query('SELECT * FROM monster_type');
    return rows;
}

async function getMonsterTypeList(){
    const { rows } = await pool.query('SELECT id, name FROM monster_type');
    return rows;
}

async function getMonsterType(monsterTypeId) {
    const { rows } = await pool.query(
        `SELECT * 
        FROM monster_type
        WHERE id = $1`,
        [monsterTypeId]
    );
    return rows[0];
}

async function getAllMonsters(){
    const { rows } = await pool.query('SELECT * FROM monsters');
    return rows;
}

async function getMonstersOfType(typeId){
    const { rows } = await pool.query(
        `SELECT *
        FROM monsters
        WHERE monster_type_id = $1`,
        [typeId]
    );

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

async function postNewMonster(monsterData){
    if(!monsterData.name) {
        return;
    }

    await pool.query(`
        INSERT INTO monsters (name, weakness, monster_type_id)
        VALUES ($1, $2, $3)`,
        [monsterData.name, monsterData.weaknesses, monsterData.monsterTypeId]
    );
}

async function deleteMonster(monsterId) {
    await pool.query(`
        DELETE FROM monsters
        WHERE id=$1`,
        [monsterId]
    );
}

async function deleteMonsterType(monsterTypeId) {
    //wrap in a transaction to avoid inconsistent state
    await pool.query("BEGIN");
    
    try {
        // Assign monsters under this type to 'Uncategorized' type.
        await pool.query(
            `UPDATE monsters
            SET monster_type_id = (
                SELECT id FROM monster_type
                WHERE name = 'Uncategorized'
            )
            WHERE monster_type_id = $1`,
            [monsterTypeId]
        );
        
        await pool.query(
            `DELETE FROM monster_type
            WHERE id = $1`,
            [monsterTypeId]
        );

        await pool.query("COMMIT");
    } catch (err) {
        await pool.query("ROLLBACK");
        throw err;
    }
}

module.exports = {
    getAllMonsters,
    getMonstersOfType,
    getMonsterType,
    getMonsterTypesData,
    getMonsterTypeList,
    getMonsterById,
    postNewMonsterType,
    postNewMonster,
    deleteMonster,
    deleteMonsterType
};