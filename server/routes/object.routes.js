const mongoose = require('mongoose');

const ObjectController = require('../controllers/object.controller'); 
module.exports = (app) => {
    app.get('/api', ObjectController.createObject);
    app.post('/api/object', ObjectController.createObject);
    app.get('/api/objects', ObjectController.getAllObject);
    app.get('/api/objects/:id', ObjectController.getObject);
}