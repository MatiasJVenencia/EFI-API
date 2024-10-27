const db = require('../models');

const createDevice = async (req, res) => {
    try {
      const { marca, modelo, tipo, numero_serie, estado } = req.body;
  
      const device = await db.Device.create({ marca, modelo, tipo, numero_serie, estado });
  
      res.status(201).json(device);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error creando el dispositivo' }); 
    }
  };

const getDevices = async (req, res) => {
    try {
      const devices = await db.Device.findAll();
      res.status(200).json(devices);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error obteniendo los dispositivos' });
    }
  };

const getDeviceById = async (req, res) => {
    try {
      const { id } = req.params;
      const device = await db.device.findByPk(id);
  
      if (!device) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
  
      res.status(200).json(device);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo el dipositivo' });
    }
  };


const updateDevice = async (req, res) => {
  try {
    const { id } = req.params; 
    const { marca, modelo, tipo, numero_serie, estado } = req.body; 

    const device = await db.Device.findByPk(id);

    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    device.marca = marca || device.marca;
    device.modelo = modelo || device.modelo;
    device.tipo = tipo || device.tipo;
    device.numero_serie = numero_serie || device.numero_serie;
    device.estado = estado || device.estado;

    await device.save();

    res.status(200).json(device);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error actualizando el dispositivo' });
  }
};


const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params; 

    const device = await db.Device.findByPk(id);

    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await device.destroy();

    res.status(200).json({ message: 'Dispositivo eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando el dispositivo' });
  }
};


module.exports = { createDevice, getDevices, getDeviceById, updateDevice, deleteDevice };