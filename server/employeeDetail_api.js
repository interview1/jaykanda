'use strict';
const express = require('express');
const empDetails_service = require('./employeeDetail_service');
const empDetails_Routes = express.Router();

empDetails_Routes.get("/api/details/:id", empDetails_service.getEmpDetails);

module.exports = empDetails_Routes;

