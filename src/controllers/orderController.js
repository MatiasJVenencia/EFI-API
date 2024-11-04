const db = require('../models');

const createOrder = async (req, res) => {
    try {
      const { fecha, problema_reportado, id_dispositivo, id_usuario, costo_estimado } = req.body;
  
      const order = await db.RepairOrder.create({ fecha, problema_reportado, id_dispositivo, id_usuario, costo_estimado });
  
      res.status(201).json(order);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error creando la orden' }); 
    }
  };

// const getOrders = async (req, res) => {
//     try {
//       const devices = await db.RepairOrder.findAll();
//       res.status(200).json(devices);
//     } catch (error) {
//       console.error(error); 
//       res.status(500).json({ error: 'Error obteniendo las ordenes' });
//     }
//   };
const getOrders = async (req, res) => {
  try {
    const orders = await db.RepairOrder.findAll({
      include: [
        {
          model: db.User,
          as: 'tecnico', 
          attributes: ['id', 'name', 'email']
        },
        {
          model: db.Device,
          as: 'dispositivo', 
          attributes: ['id', 'marca', 'modelo', 'estado'] 
        },
        {
          model: db.Repair,
          as: 'reparaciones', 
          attributes: ['id', 'fecha_inicio', 'fecha_fin', 'costo_real'] 
        }
      ]
    });
    
    res.status(200).json(orders);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error obteniendo las órdenes' });
  }
};


const getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await db.RepairOrder.findByPk(id, {
        include: [
          {
            model: db.User,
            as: 'tecnico', 
            attributes: ['name'] 
          },
          {
            model: db.Device,
            as: 'dispositivo', 
            attributes: ['marca', 'modelo', 'estado'] 
          }
        ]
      });
  
      if (!order) {
        return res.status(404).json({ error: 'Orden no encontrada' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo la orden' });
    }
  };


const updateOrder = async (req, res) => {
  try {
    const { id } = req.params; 
    const { fecha, problema_reportado, id_dispositivo, id_usuario, costo_estimado } = req.body; 

    const order = await db.RepairOrder.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    order.fecha = fecha || order.fecha;
    order.problema_reportado = problema_reportado || order.problema_reportado;
    order.id_dispositivo = id_dispositivo || order.id_dispositivo;
    order.id_usuario = id_usuario || order.id_usuario;
    order.costo_estimado = costo_estimado || order.costo_estimado;

    await order.save();

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error actualizando la orden' });
  }
};


const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params; 

    const order = await db.RepairOrder.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    await order.destroy();

    res.status(200).json({ message: 'Orden eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando la orden' });
  }
};


module.exports = { createOrder, getOrders, getOrderById, updateOrder, deleteOrder };