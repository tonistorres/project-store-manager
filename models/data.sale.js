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
    const [product] = await connection.execute(`
    SELECT  s.date, sp.product_id AS productId, sp.quantity
    FROM sales as s
    INNER JOIN sales_products as sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY s.id, sp.product_id
    `, [id]);
// console.log(product[0]);
    return product;
  };

async function main(){
    getAllModelSales();
    // getByIdModelSale(1)
}

main();

 module.exports = {
      getAllModelSales,
      getByIdModelSale,
  };