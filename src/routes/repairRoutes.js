const express = require('express');
const { createRepair, getRepairs, getRepairById, updateRepair, deleteRepair } = require('../controllers/repairController');
const router = express.Router();

router.post('/repairs', createRepair);
router.get('/repairs', getRepairs);
router.get('/repairs/:id', getRepairById);
router.put('/repairs/:id', updateRepair); 
router.delete('/repairs/:id', deleteRepair); 

module.exports = router;
