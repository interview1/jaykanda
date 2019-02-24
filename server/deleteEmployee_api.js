'use strict';
const express = require('express');
const delEmployee_service = require('./deleteEmployee_service');
const delEmployeeRoutes = express.Router();

delEmployeeRoutes.delete("/api/deleteEmployee/:id", delEmployee_service.delEmployeeData);

module.exports = delEmployeeRoutes;

