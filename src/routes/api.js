const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

// product create. product update, product delete, product read
router.post("/product/create", ProductController.create);
router.post("/product/update/:id", ProductController.update);
router.get("/product/read/:id", ProductController.read);
router.get("/product/delete/:id", ProductController.delete);

module.exports = router;
