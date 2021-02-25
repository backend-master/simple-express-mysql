const express = require("express");
const Router = express.Router();

const {getProductCat, getPriceCode, getPriceTab, getProdcutCatInv} = require("../controllers/cat.controllerr");

Router.get("/prod-cat" , getProductCat);
Router.get("/prod-inv" , getProdcutCatInv);
Router.get("/price-code" , getPriceCode);
Router.get("/price-tab" , getPriceTab);

module.exports = Router;
