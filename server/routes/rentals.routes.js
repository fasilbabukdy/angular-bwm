const express = require('express');
const router = express.Router();
const RentalCtrl = require('../controller/rental');

router.get('/', RentalCtrl.getRentals);
router.get('/:id', RentalCtrl.getRentalById);

module.exports = router;
