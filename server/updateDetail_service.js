'use strict';
const mongojs = require('mongojs');
const ObjectId = require('mongodb').ObjectID;

function getDBConnection(req) {
	return mongojs(req.app.get('LUXOFTDB'), ['details']);
}

let updatedDetailsObj = {};

updatedDetailsObj.editedEmpDetails = function(req, res, next) {
   let updatedDetailsData = getDBConnection(req);
   updatedDetailsData.collection('details').findAndModify(
       { 
           query: { 
                    _id : ObjectId(req.params.id) 
                },
           update: {
               $set: {
                    first_name : req.body.first_name, 
                    email : req.body.email,
                    gender : req.body.gender
                } 
            }
       }, function(err, updateData) {
           if(!err) {
               return res.json(updateData);
           }
       });   
};

module.exports = updatedDetailsObj;
