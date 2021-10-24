const { Router } = require('express')
const { getOrders, postOrders, getOrderUid, putOrderUid, deleteOrderUid } = require('../controller/ordersController')

const router = Router()

// aqui vai as requisições
router.get("/", getOrders)
router.post("/", postOrders)
router.get("/:uid", getOrderUid)
router.put("/:uid", putOrderUid)
router.delete("/:uid", deleteOrderUid)

module.exports = router