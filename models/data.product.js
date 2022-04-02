const { connection } = require('./mysql-connection');

const getAllModelProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products ORDER BY id ASC');
    return products;
  };

const getByIdModelProduct = async (id) => {
    const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product[0];
  };

const createModelProduct = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(`INSERT INTO
   products (name, quantity) VALUES (?, ?)`, [name, quantity]);
    return {
        id: insertId,
        name,
        quantity,  
    };
};

const updateModelProduct = async ({ id, name, quantity }) => {
  await connection.execute('UPDATE customers SET name = ?, quantity = ? WHERE id = ?',
      [name, quantity, id]);
  return {
      id,
      name,
      quantity,
  };
};

  module.exports = {
    getAllModelProducts,
    getByIdModelProduct,
    createModelProduct,
    updateModelProduct,
  };