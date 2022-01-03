//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/ville');

//READ
router.get("/villes", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/ville/:id", (req, res) => {
    
    controller.read(req, res);

});



module.exports = router;