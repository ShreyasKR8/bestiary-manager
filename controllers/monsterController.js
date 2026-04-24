const db = require('../db/queries');

exports.showMonsterInfo = async (req, res) => {
    const monsterId = Number(req.params.id);

    if(Number.isNaN(monsterId)){
        return res.status(400).send("Imvalid monster id");
    }

    const monster = await db.getMonsterById(monsterId);
    if(!monster){
        return res.status(404).send("monster not found");
    }

    res.render('monster', { monster : monster });
}