  const validaProduct = (req, res, next) => {
    const { name, quantity } = req.body;
    
   if (!name) return res.status(400).json({ message: '"name" is required' });
   if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
   if (quantity <= 0) {
      return res
      .status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    if (name.length < 5) {
        return res
        .status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    next();
  };

function validaQuantityComplement(req, res, next) {
  const { quantity } = req.body;
  console.log('entrei no middleware');
  console.log(quantity);
  if (!Number.isInteger(quantity)) {
    console.log('dentro do if ');
      return res
      .status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  if (quantity < 1) {
    console.log('dentro do if ');
      return res
      .status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  
  next();
}

    module.exports = { 
      validaProduct,
      validaQuantityComplement,
    };
