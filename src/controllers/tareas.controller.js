const tareaController = {};

/** view task list */
tareaController.getTareas = (req,res)=>{
    res.json({
        message: 'Listando tareas'
    });
};

/** view task */
tareaController.getTarea = (req,res)=>{
    res.json({
        message: 'Ver tarea',
        idTarea: req.param.id
    });
};

/**create task */
tareaController.createTarea = (req,res)=>{
    res.json({
        message: 'Creando tareas',
        idTarea: req.param.id
    });
};

/** update task */
tareaController.updateTarea = (req,res)=>{
    res.json({
        message: 'Actualizando tareas',
        idTarea: req.param.id
    });
};

/** delete task */
tareaController.deleteTarea = (req,res)=>{
    res.json({
        message: 'Eliminando tareas',
        idTarea: req.param.id
    });
};

module.exports = tareaController;