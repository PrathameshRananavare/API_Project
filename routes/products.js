const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getAllPrductsTesting,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllPrductsTesting);

module.exports = router;