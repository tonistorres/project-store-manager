const cadProdCampName = (req, res, next) => {
    const { name } = req.body;
   if (!name) return res.status(400).json({ message: '"name" is required' });
       next();
  };

  const cadProdCampNameMaior5 = (req, res, next) => {
    const { name } = req.body;
   if (name.length < 5) {
   return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
   }
       next();
  };

  const cadProdCampQutExist = (req, res, next) => {
    const { quantity } = req.body;
   if (quantity === undefined) {
   return res.status(400).json({ message: '"quantity" is required' });
   }
       next();
  };

  const cadProdCampQutMaiorZero = (req, res, next) => {
    const { quantity } = req.body;
   if (quantity < 1) {     
   return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
   }
       next();
  };

  module.exports = { 
    cadProdCampName,
    cadProdCampNameMaior5,
    cadProdCampQutExist,
    cadProdCampQutMaiorZero,
    // updateQuntMaiorZero,    
  };
