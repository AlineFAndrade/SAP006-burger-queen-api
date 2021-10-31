const { Router } = require("express");
const UsersRouter = require("./usersRouter");
const OrdersRouter = require("./ordersRouter");
const ProductsRouter = require("./productsRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const router = Router();

// aqui vai todas as rotas
router.use("/users", UsersRouter);
router.use("/orders", OrdersRouter);
router.use("/products", ProductsRouter);
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
