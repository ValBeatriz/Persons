const express = require('express');
const router = express.Router();
const personController = require('../controllers/persons.controller');

router
    .get('/',personController.get)
    .get('/:id', personController.getById)
    .post('/',personController.create)
    .put('/:id', personController.update)
    .delete('/:id', personController._delete);


module.exports = router;