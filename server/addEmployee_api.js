'use strict';
const express = require('express');
const addEmployee_service = require('./addEmployee_service');
const addEmployeeRoutes = express.Router();

addEmployeeRoutes.post("/api/addemployee", addEmployee_service.addEmployeeData);

module.exports = addEmployeeRoutes;

