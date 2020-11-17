function ejercicio1(){
    var entrada = document.getElementById('entrada').value;
    var arreglo = entrada.split(",");
    if  (typeof(arreglo) != 'object') {
        alert("Error - Ingrese elementos separados por comas")
    }
    document.getElementById('resultado').innerHTML = "Resultado: " + longitudes(arreglo) 
}
function longitudes(arreglo1) {
    salida = [];
    for (let i = 0; i < arreglo1.length; i++){
        if (arreglo1[i].length >= 0) {
            salida.push(arreglo1[i].length)
        }   
    }
    return salida 
}

function ejercicio2(){
    var texto = document.getElementById('entrada').value;
    if  (typeof(texto) != 'string' ) {
        alert("Error - Ingrese un string o texto correcto")
    }
    document.getElementById('resultado').innerHTML = "Resultado: " + sinVocales(texto) 
}
function sinVocales(texto2){
    vocales = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    salida = ''; 
    for (let i = 0; i < vocales.length; i++){
        for (let j = 0; j < texto2.length; j++){
            if (texto2[j] != vocales[i]) {  
                salida += texto2[j]
            }           
        } 
        texto2 = salida;
        salida = '';
    } 
    return texto2;
}

function ejercicio3(){
    var entrada = document.getElementById('entrada').value;
    var arreglo = entrada.split(",");
    if  ((arreglo.length <= 1 ) || (typeof(arreglo) != 'object')) {
        alert("Error - Ingrese elementos separados por comas para comparar")
    }
    document.getElementById('resultado').innerHTML = "Resultado: : " + eliminaRepetidos(arreglo) 
}
function eliminaRepetidos(arreglo){
    let index = []
    let salida = []
    for (let i = 0; i < arreglo.length; i++){
        for (let j = 0; j < arreglo.length; j++){
            if (arreglo[i] == arreglo[j]) {
                index.push(arreglo[j])
            }   
        }
        if (index.length == 1) {
            salida = salida.concat(index)
        } 
        index = []
    }    
    return salida
}
function ejercicio4(){
    var texto = document.getElementById('entrada').value;
    if  (typeof(texto) != 'string' ) {
        alert("Error - Ingrese un string o texto correcto")
    }
    document.getElementById('resultado').innerHTML = "Resultado: " + estadistica(texto) 
}
function estadistica(cadena){
    let entrada = ''; 
    let counter = 0;
    let aux = []
    for (let i = 0; i < cadena.length; i++){
        counter = 0
        entrada = ''
        for (let j =0; j < cadena.length; j++){                 
            if (cadena[i] == cadena[j]) {
                counter = counter + 1
                entrada = cadena[j]+'-'+counter
            }
        }
        if (aux.includes(entrada) == false) {  // chequea si esta o no antes de pushearlo al array
            aux.push(entrada)
        } else { 
            entrada = ''
        } 
    }  
    return aux
}
function ejercicio5(){
    var entrada = document.getElementById('entrada').value;
    if  (typeof(entrada) != 'string' ) {
        alert("Error - Ingrese un string o texto correcto")
    }
    var clave = document.getElementById('clave').value;
    let valor = parseInt(clave)
    console.log(typeof(valor))
    document.getElementById('resultado').innerHTML = "Resultado: " + encriptadora(entrada,valor) 
}
function encriptadora(texto,clave) {
    texto = texto.toLowerCase();
    if ((clave > 0) && (clave < 26)) {
        let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];    
        let copiaDeLetras = nuevasLetras(letras,clave);
        let salida = '';
        let nuevaLetra = '';
        for (let j = 0; j < texto.length; j++) {
            nuevaLetra = texto[j]
            for (let i = 0; i < copiaDeLetras.length; i++) {
                if (copiaDeLetras[i] == texto[j]) {
                    nuevaLetra = copiaDeLetras[i+clave]
                    break
                }
            }
            salida = salida + nuevaLetra
        }
        return salida 
    } else { 
    alert('ingrese un numero valido del 1 al 25')
    }
}     
function nuevasLetras(l,c) {
        let copiadas = l.slice();// remueve las primeras letras 
        copiadas = copiadas.concat(l.slice(0,c-1)) // las pone al final de copiadas
    return copiadas 
}    
