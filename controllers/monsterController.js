const { query } = require('../db/pool');
const db = require('../db/queries');
const { body, validationResult } = require("express-validator");

exports.showMonsterInfo = async (req, res) => {
    const monsterId = Number(req.params.id);

    if(Number.isNaN(monsterId)){
        return res.status(400).send("Invalid monster id");
    }

    const monster = await db.getMonsterById(monsterId);
    if(!monster){
        return res.status(404).send("monster not found");
    }

    res.render('monster', { monster : monster });
}

exports.getAllMonsters = async (req, res) => {
    const monsters = await db.getAllMonsters();

    if(monsters.length == 0) {
        return res.status(404).send("No monsters added");
    }

    res.render('monsters', { monsters: monsters });
}

exports.getAddMonsterForm = async (req, res) => {
    const monsterTypes = await db.getMonsterTypeList();
    res.render('monsterForm', { monsterTypes: monsterTypes });
}

const validateName = [
  body("name")
    .trim()
    .notEmpty().withMessage("Monster name cannot be empty")
    .isLength({ min: 2, max: 50 }).withMessage("Must be 2-50 characters long")
    .escape()
];

const validateWeaknesses = [
  body("weaknesses")
    .trim()
    .notEmpty().withMessage("This field cannot be empty")
    .isLength({ max: 255 }).withMessage("Input too long")
    .escape()
];

exports.createMonster = [ 
    validateName, 
    validateWeaknesses, 

    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
                return res.status(400).render("monsterForm", {
                errors: errors.array(),
                data: req.body,
            });
        }

        const { name, weaknesses, monsterType } = req.body;
        const monsterTypeId = Number(monsterType);

        if(Number.isNaN(monsterTypeId)){
            return res.status(400).send("Invalid monster type id");
        }

        const monsterData = { name, weaknesses, monsterTypeId };

        await db.postNewMonster(monsterData);

        res.redirect('/');
}];

exports.updateMonsterInfo = async (req, res) => {
    const monsterId = Number(req.params.id);
    if(Number.isNaN(monsterId)){
        return res.status(400).send("Invalid monster id");
    }

    const { name, weaknesses, monsterType } = req.body;
    const monsterTypeId = Number(monsterType);

    if(Number.isNaN(monsterTypeId)){
        return res.status(400).send("Invalid monster type id");
    }   

    const monsterData = { name, weaknesses, monsterTypeId };

    const rowCount = await db.updateMonster(monsterId, monsterData);

    res.redirect('/');
}

exports.getEditForm = async (req, res) => {
    const monsterId = Number(req.params.id);
    if(Number.isNaN(monsterId)){
        return res.status(400).send("Invalid monster id");
    }

    const monsterData = await db.getMonsterById(monsterId);

    const monsterTypes = await db.getMonsterTypeList();

    res.render('editMonsterForm', { monsterData, monsterTypes });
}

exports.deleteMonster = async (req, res) => {
    const monsterId = Number(req.params.id);
    if(Number.isNaN(monsterId)){
        return res.status(400).send("Invalid monster id");
    }

    await db.deleteMonster(monsterId);

    res.redirect('/');
}