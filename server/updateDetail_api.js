'use strict';
const express = require('express');
const updateDetails_service = require('./updateDetail_service');
const updateDetails_Routes = express.Router();

updateDetails_Routes.put("/api/updateEmployee/:id", updateDetails_service.editedEmpDetails);

module.exports = updateDetails_Routes;

