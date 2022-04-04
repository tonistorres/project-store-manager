function validaCadastroVenda(req, res, next) {
const arrayObject = req.body;

arrayObject.forEach((element) => {
if (element.productId === undefined) {
res.status(400).json({ message: '"productId" is required' });
}    
});

next();
}

module.exports = {
    validaCadastroVenda,
};