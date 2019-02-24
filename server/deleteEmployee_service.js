'use strict';
const mongojs = require('mongojs');
const ObjectId = require('mongodb').ObjectID;

function getDBConnection(req) {
	return mongojs(req.app.get('LUXOFTDB'), ['details']);
}

const delEmpObj = {};

delEmpObj.delEmployeeData = function(req, res, next) {
   let delEmpData = getDBConnection(req);
   delEmpData.collection('details').remove({ _id : ObjectId(req.params.id) });
};

module.exports = delEmpObj;
