const { connection } = require('./mysql-connection');

const getAllModelProducts = async () => {
    const [products] = await connection.execute(`SELECT * FROM
     StoreManager.products ORDER BY id ASC`);
    return products;
  };

const getByIdModelProduct = async (id) => {
    const [product] = await connection.execute(`SELECT * FROM 
    StoreManager.products WHERE id = ?`, [id]);
    return product[0];
  };

// validar 
  const getByNameModelProduct = async (name) => {
    const [product] = await connection.execute(`SELECT * FROM 
    StoreManager.products WHERE name = ?`, [name]);
    return product[0];
  };

const createModelProduct = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(`INSERT INTO
  StoreManager.products (name, quantity) VALUES (?, ?)`, [name, quantity]);
    return {
        id: insertId,
        name,
        quantity,  
    };
};

const updateModelProduct = async ({ id, name, quantity }) => {
  await connection.execute(`UPDATE StoreManager.products
   SET name = ?, quantity = ? WHERE id = ?`,
      [name, quantity, id]);
  return {
      id,
      name,
      quantity,
  };
};

const deletModelByIdProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
};

  module.exports = {
    getAllModelProducts,
    getByIdModelProduct,
    createModelProduct,
    updateModelProduct,
    getByNameModelProduct,
    deletModelByIdProduct,
  };