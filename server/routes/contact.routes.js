const express = require('express');
const Router = express.Router();
const contactController = require('../controllers/contact.controller');

Router.post("/", contactController.sendEmail);


module.exports = Router;