const { connection } = require('./mysql-connection');

const getAllModelProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products ORDER BY id ASC');
    return products;
  };

const getByIdModelProduct = async (id) => {
    const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product[0];
  };

async function main() {
 await getByIdModelProduct(4);
}

main();

  module.exports = {
    getAllModelProducts,
    getByIdModelProduct,
  };