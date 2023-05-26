const convertir = (idCampo) => {
    console.log('Convertir el id: ' + idCampo)
    return parseInt(document.getElementById(idCampo).value);
}

const sumar = (num1, num2) => num1 + num2;

const sumarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}

const restar = (num1, num2) => num1 - num2;

const restarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}

const multiplicar = (num1, num2) => num1 * num2;

const multiplicarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}

const dividir = (num1, num2) => num1 / num2;

const dividirNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}

const conceptosJavaScript = () => {
    //var
    //let
    //const

    var variable1 = 'Cristian';
    var variable2 = 1;
    let variable3 = 'Otro texto';
    let variable4 = 8;
    const variable5 = 'Otro otro texto';
    const variable6 = 9;

    //Declaración de Arreglos
    const diasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(diasSemana);
    console.log(diasSemana[2]);

    diasSemana.push('Jueves');
    diasSemana.push('Viernes');//Añade al final del array
    //diasSemana.unshift('Domingo')//Añade al inicio del array
    //diasSemana.push('Sabado', 'Domingo');
    console.log(diasSemana);

    const diasFinSemana = ['Sábado', 'Domingo'];

    //Guardar cambios de un array en otra const
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);

    //For de un array
    for (const dia of diasCompleto) {
        console.log(dia);
    }

    //Declaración de Objetos
    //igual usa var, let, const
    //utiliza la misma nomenclatura que JSON
    const persona = {
        nombre: "Cristian",
        apellido: "Arboleda",
        edad: 23,
        ciudad: "Quito"
    }

    const persona2 = {
        nombre: "Christian",
        apellido: "Moya",
        edad: 23,
        ciudad: "Quito",
        vehiculo: {
            marca: "Ferrari",
            modelo: "52",
            anio: 1989
        }
    }

    //No deja, estamos cambiando todo el const
    const a = 'a'
    console.log(a);
    //a = 'b';
    console.log(a);


    //SI DEJA, solo cambia algo dentro y si permite si es const
    const arreglo1 = ['a','b'];
    console.log(arreglo1)
    arreglo1[0] = 'e';
    console.log(arreglo1)

    console.log(persona)
    console.log(persona2)

    persona.ciudad = "Guayakill";

    console.log(persona)

    //Desestructuración de arreglos
    const dias2 = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    const [dia1,dia2,dia3,dia4] = dias2;//array dias2 descompuesto en otros elementos
    console.log(dia2);//un elemento descompuesto

    const [d1,d2,d3,d4,d5] = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    console.log(d2)

    //Desestructuración de objetos
    const persona3 = {
        nombre: "Cristian",
        apellido: "Arboleda",
        edad: 23,
        ciudad: "Quito"
    }

    const {nombre,ciudad} = persona3;//Se descompone por los atributos con su nombre respectivo
    console.log(nombre);
    console.log(ciudad);

    const persona4 = {
        nombre: "Christian",
        apellido: "Moya",
        edad: 23,
        ciudad: "Quito",
        vehiculo: {
            marca: "Ferrari",
            modelo: "52",
            anio: 1989
        }
    }

    console.log(persona4.vehiculo.anio);

    const {vehiculo} = persona4;
    console.log(vehiculo);
    const {marca} = vehiculo;
    console.log(marca);
}