
const argv = require('yargs')
.command('crear','Crear un elemento por hacer',{
    descripcion:{
        demand:true,
        alias:'d',
        desc: 'Descripcion de la tarea por hacer'
    }
})
.command('actualizar','Actualizar el estatdo completado ',{
    descripcion:{
        demand:true,
        alias:'d',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:{
        demand:true,
        alias:'c',
        desc: 'Marca como competado o pendiente tarea'
    }
})
.command('borrar','Borra una tarea',{
    descripcion:{
        demand:true,
        alias:'d',
        desc: 'Descripcion de la tarea por hacer'
    }
})
.help()
.argv;

module.exports={
    argv
}