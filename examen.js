function longitudes(){
    var arreglo1 = []
    arreglo1 = document.getElementsByTagName('input') 
    ejercicio1()
}


function ejercicio(arreglo1) {
    salida = [];
    for (let i = 0; i < arreglo1.length; i++){
        if (arreglo1[i].length >= 0) {
            salida.push(arreglo1[i].length)
        }   
    }
    alert(salida)
}

function ejercicio2(){
    var texto = document.getElementById('entrada').value;
    document.getElementById('resultado').innerHTML = "salida: " + sinVocales(texto) 

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
    return texto2
}

function eliminaRepetidos1(arreglo){
    counter = 0
    repe = [];
    for (let i = 0; i < arreglo.length; i++){
        for (let j =0; j < arreglo.length-i; j++){                 
            if (arreglo[i] == arreglo[j]) {
                counter = counter + 1 
            }
            if (counter >= 2) {
                repe.push(arreglo[i])
                counter = 0 
            }
        }
    } 
    for (let j =0; j < repe.length; j++){   
        for (let i = 0; i < arreglo.length; i++){
            if (arreglo[i] == repe[j]) {
                arreglo.splice(i,1)
            }    
        }       
    }
    return arreglo               
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
    console.log(salida)
}
function estadistica1(cadena){
    salida = [];
    counter = 0;
    cuenta = 0;
    aux = [];
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] != ' ') {
            salida.push(cadena[i])
        }    
    }    
    for (let i = 0; i < salida.length; i++){
        for (let j =0; j < salida.length; j++){                 
            if (salida[i] == salida[j]) {
                counter = counter + 1
            } 
        }
        aux.push(salida[i]+'-'+counter)
        counter = 0
    }    
    for (let i = 0; i < aux.length; i++){
        for (let j =0; j < aux.length; j++){   
            if (aux[i] == aux[j]) {
                cuenta = cuenta + 1 
                if (cuenta > 1)  {
                    aux.splice(j,1)
                }
            }
        }       
        cuenta = 0
    }
    return aux 
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
    console.log(aux)
}


function encriptadora(texto,clave) {
    texto = texto.toLowerCase();
    if ((clave > 0) && (clave < 26)) {
        let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];    
        let copiaDeLetras = nuevasLetras(letras,clave);
        let salida = '';
        console.log(copiaDeLetras)
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
        console.log(salida) 
    } else { 
    console.log('el numero no es valido')
    }
}     





function nuevasLetras(sapo,pepe) {
        let copiadas = sapo.slice();
        copiadas = copiadas.concat(sapo.slice(0,pepe-1)) // copia las primeras letras  
    return copiadas 
}    

function encriptadora2(texto,clave) {
    texto = texto.toLowerCase();
    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']    
    let removidas = []
    if (clave > 0) {
        removidas = letras.splice(0,clave) // remueve las primeras letras 
        letras = letras.concat(removidas) //  las pone al final de letras 
    }    
    console.log(letras)
}    
