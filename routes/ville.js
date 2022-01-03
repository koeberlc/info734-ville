//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/ville');

//CREATE
router.post("/ville", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/villes", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/ville/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/ville/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/ville/:id", (req, res) => {
    
    controller.delete(req, res);

});


module.exports = router;