let Adm = require('../models/adm');

const AdmController = {
    index: (req, res, next) => {
        console.log("aqui");
        res.send(Adm.todos());
    }
}
 
module.exports = AdmController;