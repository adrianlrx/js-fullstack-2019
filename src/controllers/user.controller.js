const userController = {};

const UserModel = require('../models/user');
const TareaModel = require('../models/tarea');

userController.getUSers = async(req,res)=>{
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.json({
            success: false,
            message: 'No se encuentran usuarios'
        })
    }
};

userController.getUSer = async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.id);
        const tasks = await TareaModel.find({username: user});
        res.json({
            usuario: user,
            tareas:  tasks
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'No se encuentran el usuario'
        })
    }
};

userController.createUSer = async(req,res)=>{
    if(!username) return res.json({
        success: false,
        message: 'el username esta vacio'
    });
    if(!email) return res.json({
        success: false,
        message: 'el email esta vacio'
    });
    if(!estado) return res.json({
        success: false,
        message: 'el estado esta vacio'
    });

    const newUser = new UserModel({
        username,
        email,
        estado
    });

    try {
        await newUser.save();
        res.json({
            success: true,
            message: 'Usuario creado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Usuario no creado'
        });
    }
};

userController.updateUSer = async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.json({
            success: true,
            message: 'Usuario actualizado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error en actualizar usuario'
        });
        
    }
};

userController.deleteUSer = async(req,res)=>{
    try {
        const completed = await TareaModel.find({completed: false});

        if(!completed) return res.json({
            success: false,
            message: 'el usuario tiene tareas pendientes'
        });
        await UserModel.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Usuario eliminado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Usuario no eliminado'
        });
    }
};

userController.bajaUSer = async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id}, {estado: 'inactivo'});
        res.json({
            success: true,
            message: 'Usuario actualizado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error en actualizar usuario'
        });
        
    }
};

userController.altaUSer = async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id}, {estado: 'activo'});
        res.json({
            success: true,
            message: 'Usuario actualizado'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error en actualizar usuario'
        });
        
    }
};

module.exports = userController;