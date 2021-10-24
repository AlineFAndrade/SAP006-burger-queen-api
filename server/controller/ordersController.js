// aqui vai o código que acessa o banco de dados

const getOrders = (req, res) => {
  res.send("getOrders funciona");
};

const postOrders = (req, res) => {
  res.send("postOrders funciona");
};

const getOrderUid = (req, res) => {
  res.send("getOrderUid funciona");
};

const putOrderUid = (req, res) => {
  res.send("putOrderUid funciona");
};

const deleteOrderUid = (req, res) => {
  res.send("deleteOrderUid funciona");
};

module.exports = {
  getOrders,
  postOrders,
  getOrderUid,
  putOrderUid,
  deleteOrderUid,
};
