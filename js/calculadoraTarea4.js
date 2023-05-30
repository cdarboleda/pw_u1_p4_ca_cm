let resultado = '';

function calc(num) {
    resultado += num;
    document.getElementById('labelResultado').innerHTML = "Resultado: " + resultado;
    console.log(resultado)
}

function calcClear(){
    resultado = ''
    document.getElementById('labelResultado').innerHTML = "Resultado: ";
}

function calcRes(){
    try {
        let resNumerico = parseFloat(eval(resultado))
        document.getElementById('labelResultado').innerHTML = "Resultado: " + resNumerico;
        console.log(resNumerico)
        resultado = resNumerico 
    } catch (error) {//si mi label no esta bien escrito
        calcClear()
    }

}