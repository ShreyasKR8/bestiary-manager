const db = require('../db/queries');
const { body, validationResult } = require("express-validator");

exports.showMonstersOfType = async (req, res) => {
  const monsterTypeId = Number(req.params.typeId);

  if (Number.isNaN(monsterTypeId)) {
    return res.status(400).send("Invalid monster type id");
  }

  const monsterType = await db.getMonsterType(monsterTypeId);

  if (!monsterType) {
    return res.status(404).send("Monster type not found");
  }

  const monsters = await db.getMonstersOfType(monsterTypeId);

  res.render("monstersOfType", {
    monsterType,
    monsters,
  });
};

exports.getAddMonsterTypeForm = async (req, res) => {
    res.render('monsterTypeForm');
}

const validateName = [
  body("monsterType")
    .trim()
    .notEmpty().withMessage("Monster type name cannot be empty")
    .isLength({ min: 2, max: 50 }).withMessage("Must be 2-50 characters long")
    .escape()
];

const validateDesc = [
  body("desc")
    .trim()
    .notEmpty().withMessage("Description cannot be empty")
    .isLength({ max: 255 }).withMessage("Description too long")
    .escape()
];

exports.createMonsterType = [validateName, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).render("monsterTypeForm", {
                errors: errors.array(),
                data: req.body,
            });
    }

    const monsterTypeName = req.body.monsterType;
    const description = req.body.desc;

    await db.postNewMonsterType(monsterTypeName, description);
    
    res.redirect('/');
}];

exports.deleteMonsterType = async (req, res) => {
    const monsterTypeId = Number(req.params.id);
    if(Number.isNaN(monsterTypeId)){
        return res.status(400).send("Invalid monster type id");
    }

    const monsterType = await db.getMonsterType(monsterTypeId);
    
    if(monsterType.name === 'Uncategorized') {
        return res.status(400).send("Cannot delete the default category");
    }

    await db.deleteMonsterType(monsterTypeId);

    res.redirect('/');
}