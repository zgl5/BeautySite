const express = require('express');
const router = express.Router();
const procedureCtrl = require('../../controllers/api/procedureCont');

// GET
router.get('/', procedureCtrl.index);
// GET 
router.get('/:?type=:type', procedureCtrl.show);

module.exports = router;