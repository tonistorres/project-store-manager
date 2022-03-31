const { connection } = require('./mysql-connection');

const getAllModelProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products ORDER BY id ASC');
    return products;
  };

const getByIdModelProduct = async (id) => {
    const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product[0];
  };

  module.exports = {
    getAllModelProducts,
    getByIdModelProduct,
  };