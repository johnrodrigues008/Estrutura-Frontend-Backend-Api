const express = require('express');

const UseController = require("../../app/controllers/UseController");

const router = express.Router();

router.get('/users', UseController.index);

module.exports = router;