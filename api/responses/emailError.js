module.exports = function emailError() {
	var res = this.res; 

	return res.send(409, 'Error en el email, ya existe uno');
};