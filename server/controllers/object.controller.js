const mongoose = require('mongoose');

const Object = require("../models/object.model"); 


module.exports.createObject = (request, response) => {
  
  Object.create(request.body) 
    .then((object) => response.json(object))
    .catch((err) => response.json(err));
};

module.exports.getObject = (request, response) => {
    Object.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}


module.exports.getAllObject = (request, response) => {
    Object.find({})
        .then(object => {
            console.log(object);
            response.json(object);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}