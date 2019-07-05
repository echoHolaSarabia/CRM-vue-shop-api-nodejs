'use strict'

var Category = require('../models/category')

function pruebas(req, res) {
    res.status(200).send({
        menssage: 'Esta ruta es de prueba'
    });
}

function saveCategory(req, res){
    var category = new Category();
    var params = req.body;

    if (params.name){
        category.name = params.name;
        category.picture = params.picture;
        category.id = params.id;

        category.save((err, categoryStored) => {
            if (err){
                res.status(500).send({
                    message: "Error en el servidor al subir categorias"
                })
            }else{
                if (categoryStored){
                    res.status(200).send({
                        category: categoryStored
                    })
                }else{
                    res.status(500).send({
                        message: "Pues parecía que sí, pero no. Error al guardar category."
                    })
                }
            }
        })
    }else{
        res.status(200).send({
            message: "El nombre de la categoría es obligatorio"
        })
    }

}


//Devuelve Json son todos los datos
//Ordena datos de último a primero: sort({'_id':-1})
function getCategories(req, res){
    Category.find({}).sort({'_id':-1}).exec((err, categories) => {
        if(err){
            res.status(500).send({
                message: "Error listando categorias en el json"
            })
        }else{
            if(categories){
                res.status(200).send({
                   categories
                })
            }else{
                res.status(404).send({
                    message: "No hay categories. Ve al mercao"
                })
            }
        }
    })
}


//Devuelve Json con un solo categories
function getCategory(req, res){
    var categoryId = req.params.id;

    Category.findById(categoryId).exec((err, category) => { 
        if(err){
            res.status(500).send({
                message: "Error listando el category en el json"
            })
        }else{
            if(category){
                res.status(200).send({
                    category
                })
            }else{
                res.status(404).send({
                    message: "No hay category"
                })
            }
        }
    })
}


//Actualiza category
function updateCategory(req, res){
    var prouductId = req.params.id;
    var update = req.body;
     
    //findByIdAndUpdate devuelve x defecto los datos a modificar. Si ponemos {new:true} nos trae los nuevos.
    Category.findByIdAndUpdate(prouductId, update, {new:true}, (err, categoryUpdated) => {
        if(err){
            res.status(500).send({
                message: "Error actualizando el category"
            })
        }else{
            if (categoryUpdated){
                res.status(200).send({
                    category: categoryUpdated
                })
            }else{
                res.status(404).send({
                    message: "No existe el category"
                })
            }
        
        }

    });
}


//Borra category
function deleteCategory(req, res){
    var categoryId = req.params.id;

    Category.findByIdAndRemove(categoryId, (err, categoryRemoved) => {
        if(err){
            res.status(500).send({
                message: "Error borrando el category"
            })
        }else{
            if (categoryRemoved){
                res.status(200).send({
                    category: categoryRemoved
                })
            }else{
                res.status(404).send({
                    message: "No existe el category"
                })
            }
        }
    })
}


module.exports = {
    pruebas,
    saveCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
};