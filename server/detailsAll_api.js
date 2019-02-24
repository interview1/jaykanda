'use strict';
const express = require('express');
const detailsAll_service = require('./detailsAll_service');
const detailsAll_Routes = express.Router();

detailsAll_Routes.get("/api/details", detailsAll_service.getdetailsAllData);

module.exports = detailsAll_Routes;

