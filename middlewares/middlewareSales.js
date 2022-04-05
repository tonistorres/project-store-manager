function validaCadastroVenda(req, res, next) {
    const arrayObject = req.body;
    for (let i = 0; i < arrayObject.length; i += 1) {
        if (!('productId' in arrayObject[i])) {
          return res.status(400).json({ message: '"productId" is required' });
        }
        if (!('quantity' in arrayObject[i])) {
          return res.status(400).json({ message: '"quantity" is required' });   
        }
      }
    next();
    }

    function validaQuantity(req, res, next) {
        const arrayObject = req.body;
    for (let i = 0; i < arrayObject.length; i += 1) {
        if (arrayObject[i].quantity <= 0) {
            return res.status(422).json(
                { message: '"quantity" must be greater than or equal to 1' },
                );
        }
    }
        next();
    }

    module.exports = {
        validaCadastroVenda,
        validaQuantity,
    };