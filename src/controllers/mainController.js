const path = require("path");

const controller = {
    index: (req, res) =>{
        res.render('index')    // renderiza el index  //
    },
 
    details : (req, res) =>{
        res.render("details") // renderiza el details //
    },
    productCart : (req, res) =>{
        res.render("products/productCart") // renderiza el carrito de compras //
    },
}

module.exports = controller;

