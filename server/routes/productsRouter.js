const { Router } = require('express')
const { getProducts, getProductUid } = require('../controller/productsController')

const router = Router()

// aqui vai as requisições
router.get("/", getProducts)
router.get("/:uid", getProductUid)

module.exports = router