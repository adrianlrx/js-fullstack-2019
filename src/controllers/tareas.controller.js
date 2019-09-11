const tareaController = {};

const TareaModel = require('../models/tarea');
const UserModel = require('../models/user');

/** view task list */
tareaController.getTareas = async (req,res)=>{
    try {
        const tareas = await TareaModel.find();
        res.json(tareas);
    } catch (error) {
        // console.log(error);
        res.json({
            success: false,
            message: ' Ha ocurrido un error'
        });
    }
};

/** view task */
tareaController.getTarea = async (req,res)=>{
    try {
        const tarea = await TareaModel.findById(req.params.id);
        res.json(tarea);
    } catch (error) {
        rs.json({
            success: false,
            message: ' Ha ocurrido un error'
        })
        // console.log(req.params.id);
    }
};

/**create task */
tareaController.createTarea = async (req,res)=>{
    const {title, description, username} = req.body;
    if(!title) return res.json({
        success: false,
        message: 'el titulo esta vacio'
    });
    if(!description) return res.json({
        success: false,
        message: 'la descripcion esta vacia'
    });
    if(!username) return res.json({
        success: false,
        message: 'el usuario esta vacio'
    });

    
    try {
        const user = await UserModel.findOne({username:username});
        if(!user) return res.json({
            success: false,
            message: 'el usuario no existe'
        });

        if(!user.estado) return res.json({
            success: false,
            message: 'el usuario no esta activado'
        });
        
        const newTarea = new TareaModel({
            title,
            description,
            userID: user._id
        });

        await newTarea.save();
        res.json({
            success: true,
            message: 'Tarea ha sido creada'
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'ha ocurrido un error'
        });
    }
};

/** update task */
tareaController.updateTarea = async (req,res)=>{
    try {
        await TareaModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.json({
            success: true,
            message: 'tarea actualizada'
        });
    } catch (error) {
        // console.log(error);
        res.json({
            success: false,
            message: 'ha ocurrido un error'
        });
    }
};

/** delete task */
tareaController.deleteTarea = async (req,res)=>{
    try {
        await TareaModel.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Tarea eliminada'
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

tareaController.taskCompleted = async(req,res)=>{
    try {
        await TareaModel.findByIdAndUpdate({_id:req.params.id}, {completed: true});
        res.json({
            success: true,
            message: 'tarea completada'
        });
    } catch (error) {
        // console.log(error);
        res.json({
            success: false,
            message: 'ha ocurrido un error'
        });
    }
};

module.exports = tareaController;