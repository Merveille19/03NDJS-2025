function sum(a ,b){
	return a + b;

}
function diff(a,b){
	return a - b;

}
function prod(a, b){
	return a * b;

}
function quot(a, b){
	if (b === 0){
		return "b ne peut pas prendre de valeur nulle, l'operation est impossible";
	}
	return a / b;
}

module.exports = { sum, diff, prod, quot};
