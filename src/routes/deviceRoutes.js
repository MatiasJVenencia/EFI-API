const express = require('express');
const { createDevice, getDevices, getDeviceById, updateDevice, deleteDevice } = require('../controllers/deviceController');
const router = express.Router();

router.post('/devices', createDevice);
router.get('/devices', getDevices);
router.get('/devices/:id', getDeviceById);
router.put('/devices/:id', updateDevice); 
router.delete('/devices/:id', deleteDevice); 

module.exports = router;
