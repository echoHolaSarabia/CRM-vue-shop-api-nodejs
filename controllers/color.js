'use strict'

var Color = require('../models/color')

function pruebas(req, res) {
    res.status(200).send({
        menssage: 'Esta ruta es de prueba'
    });
}

function saveColor(req, res){
    var color = new Color();
    var params = req.body;

    if (params.name){
        color.name = params.name;
        color.id = params.id;
        color.css = params.css;

        color.save((err, colorStored) => {
            if (err){
                res.status(500).send({
                    message: "Error en el servidor al subir colores"
                })
            }else{
                if (colorStored){
                    res.status(200).send({
                        color: colorStored
                    })
                }else{
                    res.status(500).send({
                        message: "Pues parecía que sí, pero no. Error al guardar colores."
                    })
                }
            }
        })
    }else{
        res.status(200).send({
            message: "El nombre del color es obligatorio"
        })
    }

}

//Devuelve Json son todos los datos
//Ordena datos de último a primero: sort({'_id':-1})
function getColors(req, res){
    Color.find({}).sort({'_id':1}).exec((err, colors) => {
        if(err){
            res.status(500).send({
                message: "Error listando Colors en el json"
            })
        }else{
            if(colors){
                res.status(200).send({
                    colors
                })
            }else{
                res.status(404).send({
                    message: "No hay colors. Ve al mercao"
                })
            }
        }
    })
}


//Devuelve Json con un solo colors
function getColor(req, res){
    var colorsId = req.params.id;

    Color.findById(colorsId).exec((err, colors) => { 
        if(err){
            res.status(500).send({
                message: "Error listando el colors en el json"
            })
        }else{
            if(colors){
                res.status(200).send({
                    colors
                })
            }else{
                res.status(404).send({
                    message: "No hay colors"
                })
            }
        }
    })
}


//Actualiza colors
function updateColor(req, res){
    var prouductId = req.params.id;
    var update = req.body;
     
    //findByIdAndUpdate devuelve x defecto los datos a modificar. Si ponemos {new:true} nos trae los nuevos.
    Color.findByIdAndUpdate(prouductId, update, {new:true}, (err, colorUpdated) => {
        if(err){
            res.status(500).send({
                message: "Error actualizando el colors"
            })
        }else{
            if (colorUpdated){
                res.status(200).send({
                    color: colorUpdated
                })
            }else{
                res.status(404).send({
                    message: "No existe el color"
                })
            }
        
        }

    });
}


//Borra color
function deleteColor(req, res){
    var colorId = req.params.id;

    Color.findByIdAndRemove(colorId, (err, colorRemoved) => {
        if(err){
            res.status(500).send({
                message: "Error borrando el color"
            })
        }else{
            if (colorRemoved){
                res.status(200).send({
                    color: colorRemoved
                })
            }else{
                res.status(404).send({
                    message: "No existe el color"
                })
            }
        }
    })
}


module.exports = {
    pruebas,
    saveColor,
    getColors,
    getColor,
    updateColor,
    deleteColor
};
