const { connection } = require('./mysql-connection');

const getAllModelSales = async () => {
    const [sales] = await connection.execute(`
    SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM sales as s
    INNER JOIN sales_products as sp
    ON s.id = sp.sale_id
    `);
    
    return sales;
  };

  const getByIdModelSale = async (id) => {
    const [sale] = await connection.execute(`
    SELECT  s.date, sp.product_id AS productId, sp.quantity
    FROM sales as s
    INNER JOIN sales_products as sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY s.id, sp.product_id
    `, [id]);    
    return sale;
  };

  // Registrando data da venda e gerando id para detalhe da venda
  const createModelSales = async () => {
    const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
    
    return {
      id: insertId,   
  };
  };
  
  const createModelSalesProducts = async ({ id, productId, quantity }) => {
    // console.log('-------MODEL ------');
    // console.log(id, productId, quantity);

    const [{ insertId }] = await connection.execute(`INSERT INTO
    sales_products (id, productId, quantity) VALUES (?, ?, ?)`, [id, productId, quantity]);
      return {
          id: insertId,
          productId,
          quantity,  
      };
  };
  
// async function main(){
//   await createModelSales();
  
// }

// main();

 module.exports = {
      getAllModelSales,
      getByIdModelSale,
      createModelSales,
      createModelSalesProducts,
  };