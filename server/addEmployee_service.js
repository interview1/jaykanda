'use strict';
const mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('LUXOFTDB'), ['details']);
}

const addEmpObj = {};

addEmpObj.addEmployeeData = function(req, res, next) {
   let addEmpData = getDBConnection(req);
   addEmpData.collection('details').insert(req.body);
};

module.exports = addEmpObj;
