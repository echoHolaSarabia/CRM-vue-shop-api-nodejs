'use strict'

var Product = require('../models/product')

function pruebas(req, res) {
    res.status(200).send({
        menssage: 'Esta ruta es de prueba'
    });
}

//Subo Productos
function saveProduct(req, res){
    var product = new Product();
    var params = req.body;

    if (params.name){
        product.name = params.name;
        product.picture = params.picture;
        product.price = params.price;
        product.stock = params.stock;
        product.category = params.category;
        product.color = params.color;
        product.actions = params.actions;
        product.id = params.id;

        product.save((err, productStored) => {
            if (err){
                res.status(500).send({
                    message: "Error en el servidor al subir productos"
                })
            }else{
                if (productStored){
                    res.status(200).send({
                        product: productStored
                    })
                }else{
                    res.status(500).send({
                        message: "Pues parecía que sí, pero no. Error al guardar productos."
                    })
                }
            }
        })
    }else{
        res.status(200).send({
            message: "El nombre del producto es obligatorio"
        })
    }

}

//Devuelve Json son todos los datos
//Ordena datos de último a primero: sort({'_id':-1})
function getProducts(req, res){
    Product.find({}).sort({'_id':-1}).exec((err, products) => {
        if(err){
            res.status(500).send({
                message: "Error listando productos en el json"
            })
        }else{
            if(products){
                res.status(200).send({
                   products
                })
            }else{
                res.status(404).send({
                    message: "No hay productos. Ve al mercao"
                })
            }
        }
    })
}


//Devuelve Json con un solo producto
function getProduct(req, res){
    var productId = req.params.id;

    Product.findById(productId).exec((err, product) => { 
        if(err){
            res.status(500).send({
                message: "Error listando el producto en el json"
            })
        }else{
            if(product){
                res.status(200).send({
                   product
                })
            }else{
                res.status(404).send({
                    message: "No hay producto"
                })
            }
        }
    })
}


//Actualiza producto
function updateProduct(req, res){
    var prouductId = req.params.id;
    var update = req.body;
     
    //findByIdAndUpdate devuelve x defecto los datos a modificar. Si ponemos {new:true} nos trae los nuevos.
    Product.findByIdAndUpdate(prouductId, update, {new:true}, (err, productUpdated) => {
        if(err){
            res.status(500).send({
                message: "Error actualizando el producto"
            })
        }else{
            if (productUpdated){
                res.status(200).send({
                    product: productUpdated
                })
            }else{
                res.status(404).send({
                    message: "No existe el producto"
                })
            }
        
        }

    });
}


//Borra producto
function deleteProduct(req, res){
    var productId = req.params.id;

    Product.findByIdAndRemove(productId, (err, productRemoved) => {
        if(err){
            res.status(500).send({
                message: "Error borrando el producto"
            })
        }else{
            if (productRemoved){
                res.status(200).send({
                    product: productRemoved
                })
            }else{
                res.status(404).send({
                    message: "No existe el producto"
                })
            }
        }
    })
}


module.exports = {
    pruebas,
    saveProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};

