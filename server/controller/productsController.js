// aqui vai o código que acessa o banco de dados

const getProducts = (req, res) => {
  res.send("getProducts funciona");
};

const getProductUid = (req, res) => {
  res.send("getProductUid funciona");
};

module.exports = { getProducts, getProductUid };
