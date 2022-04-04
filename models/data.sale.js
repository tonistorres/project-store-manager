const { connection } = require('./mysql-connection');

const getAllModelSales = async () => {
    const [sales] = await connection.execute(`
    SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales as s
    INNER JOIN StoreManager.sales_products as sp
    ON s.id = sp.sale_id
    `);
    
    return sales;
  };

  const getByIdModelSale = async (id) => {
    const [sale] = await connection.execute(`
    SELECT  s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales as s
    INNER JOIN StoreManager.sales_products as sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY s.id, sp.product_id
    `, [id]);   
    
    return sale;
  };

   const createModelSales = async () => {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
      );
    
    return {
      id: insertId,   
  };
  };
  
  const createModelSalesProducts = async ({ id, productId, quantity }) => {
    const [{ insertId }] = await connection.execute(`INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`, [id, productId, quantity]);
    
      return {
          id: insertId,
          productId,
          quantity,  
      };
  };

  async function updateModelSales({ qtde, idvenda, idProduct }) {
     await connection.execute(
      `UPDATE StoreManager.sales_products 
      SET quantity = ? WHERE sale_id = ? AND product_id = ?`,
      [qtde, idvenda, idProduct],
    );
  
    return {
      saleId: idvenda,
      itemUpdated: [
        {
          productId: idProduct,
          quantity: qtde,
        },
      ],
    };
  }
  
 module.exports = {
      getAllModelSales,
      getByIdModelSale,
      createModelSales,
      createModelSalesProducts,
      updateModelSales,

  };