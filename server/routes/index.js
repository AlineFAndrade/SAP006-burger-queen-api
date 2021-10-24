const { Router } = require('express')
const UsersRouter = require("./usersRouter")
const OrdersRouter = require("./ordersRouter")
const ProductsRouter = require("./productsRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/orders', OrdersRouter);
router.use('/products', ProductsRouter);

module.exports = router
