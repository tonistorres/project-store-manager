function validaCadastroVenda(req, res, next) {
const arrayObetos = req.body;
arrayObetos.array.forEach((element) => {
    if (element.productId === undefined) {
        return res.status(400).json({ message: '"productId" is required' });
    }
});
    next();
}

module.exports = {
    validaCadastroVenda,
};