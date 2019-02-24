'use strict';
const mongojs = require('mongojs');
const ObjectId = require('mongodb').ObjectID;

function getDBConnection(req) {
	return mongojs(req.app.get('LUXOFTDB'), ['details']);
}

let empDetailsObj = {};

empDetailsObj.getEmpDetails = function(req, res, next) {
   let empDetailsData = getDBConnection(req);
   empDetailsData.collection('details').findOne({ _id : ObjectId(req.params.id) }, function(err, empDetails){
        res.json(empDetails);
    });   
};

module.exports = empDetailsObj;

