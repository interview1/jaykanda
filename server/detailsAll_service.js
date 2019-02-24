'use strict';
const mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('LUXOFTDB'), ['details']);
}

let detailsAllObj = {};

detailsAllObj.getdetailsAllData = function(req, res, next) {
   let detailsAllData = getDBConnection(req);
   detailsAllData.collection('details').find(function(err,allDetails){
        console.log('alldetails= ===>', allDetails);
        res.json(allDetails);
    });   
};

module.exports = detailsAllObj;
