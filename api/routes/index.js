const express = require('express');
const catelogController = require('../controllers/catalog');
const router = express.Router();

router.get('/phones', catelogController.getPhones);

module.exports = router;