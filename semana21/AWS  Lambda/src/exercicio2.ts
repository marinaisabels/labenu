function myFunc() {
	return "Olá mundo, sou uma mensagem da AWS"
}

//Na Lambda

exports.handler = async (event) => {
    return event;
};