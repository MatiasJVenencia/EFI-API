const db = require('../models');

const createRepair = async (req, res) => {
    try {
      const { id_orden, fecha_inicio, fecha_fin, costo_real } = req.body;
  
      const repair = await db.Repair.create({ id_orden, fecha_inicio, fecha_fin, costo_real });
  
      res.status(201).json(repair);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error registrando la reparación' }); 
    }
  };

const getRepairs = async (req, res) => {
    try {
      const devices = await db.Repair.findAll();
      res.status(200).json(devices);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error obteniendo las reparaciones' });
    }
  };

const getRepairById = async (req, res) => {
    try {
      const { id } = req.params;
      const repair = await db.Repair.findByPk(id);
  
      if (!repair) {
        return res.status(404).json({ error: 'Reparación no encontrada' });
      }
  
      res.status(200).json(repair);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo la reparación' });
    }
  };


const updateRepair = async (req, res) => {
  try {
    const { id } = req.params; 
    const { id_orden, fecha_inicio, fecha_fin, costo_real } = req.body; 

    const repair = await db.Repair.findByPk(id);

    if (!repair) {
      return res.status(404).json({ error: 'Reparación no encontrada' });
    }

    repair.id_orden = id_orden || repair.id_orden;
    repair.fecha_inicio = fecha_inicio || repair.fecha_inicio;
    repair.fecha_fin = fecha_fin || repair.fecha_fin;
    repair.costo_real = costo_real || repair.costo_real;

    await repair.save();

    res.status(200).json(repair);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error actualizando la reparación' });
  }
};


const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params; 

    const repair = await db.Repair.findByPk(id);

    if (!repair) {
      return res.status(404).json({ error: 'Reparación no encontrada' });
    }

    await repair.destroy();

    res.status(200).json({ message: 'Reparación eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando la Reparación' });
  }
};


module.exports = { createRepair, getRepairs, getRepairById, updateRepair, deleteRepair };