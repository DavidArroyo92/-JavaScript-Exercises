
//1) Variables y Operadores

/*
a) Crear dos variables numéricas y utilizar el operador suma para 
guardar el valor de la suma de ambos números en una 3er variable.
*/

var Num1=5;
var Num2=5;

var Sum= Num2 + Num2;
console.log(Sum);

/*
b) Crear dos variables de tipo String y 
concatenarlas guardando el resultado en una 3er variable.
*/

var firstName='David ';
var lastName='Arroyo';

var User= firstName.concat(lastName);
console.log(User);

/*
c) Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado la suma una 3er variable 
(utilizar length).
*/

var Country='Argentina'
var City='San Nicolas'

var length1= Country.length+City.length;
console.log(length1)

//2)Strings

/*
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo
el texto en mayúscula (utilizar toUpperCase).
*/

var minus='san nicolas';
console.log(minus.toUpperCase());

/*
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring)
*/

var string1='san nicolas';
var string2= string1.substring(0,5);
console.log(string2);

/*
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var string1='san nicolas';
var string2= string1.substring(8,11);
console.log(string2);

/*
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var string3="philadelphia";
var string4= (string3.substring(0,1)).toUpperCase() + (string3.substring(1,12)).toLowerCase();
console.log(string4);

/*
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var string5='buenos aires';
var space= string5.indexOf(' ');
console.log(space);

/*
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).
*/

//En este ejercicio pense que el uso de indexOf era para que se visualise el espacio entre las palabras pero me devolvia -1, como si no hubiera encontrado el indice

var string6='minnesota timberwolves'
var string7= (string6.substring(0,1)).toUpperCase()+(string6.substring(1,9)).toLowerCase()+ (' ')+ (string6.substring(11,12)).toUpperCase()+(string6.substring(11,23)).toLowerCase();//¿How I can get space beetween into the word?
console.log(string7);

//3)Arrays

/*
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
console.log(meses[4],meses[10]);

/*
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

var arregloMeses= meses.sort();
console.log(arregloMeses);

/*
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

var year= meses.push('2020')+meses.unshift('1999');
console.log(meses);

/*
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

var newArray= meses.shift()+meses.pop();
console.log(meses);

/*
e) Invertir el orden del array (utilizar reverse)
*/

console.log(meses.reverse());

/*
f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

console.log(meses.join('-'));

/*
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var nuevoMeses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];


console.log(nuevoMeses.slice(4,-1));

//If else

/*
a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es 
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con 
el mensaje “Lower than 0,5”
*/

function generateRandom(){  
    var random= Math.random();
    if (random >= 0.5) {
    console.log("Greater than 0,5");
    } else {
    console.log("Lower than 0.5");
    }
 }

 generateRandom();

/*
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

 var age=35;

if(age<2){
     alert('Bebé');
}
else if(age>=2 && age<=12){
    alert('Niño');
}
else if(age>=13 && age<=19){
    alert('Adolescente');
}
else if(age>=20 && age<=30){
    alert('Joven');
}
else if(age>=31 && age<=60){
    alert('Adulto');
}
else if(age>=61 && age<=75){
    alert('Adulto mayor');
}
else if(age>75){
    alert('Anciano')
}

//For

/*
   a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
     una alerta utilizando cada una de las palabras.
*/

var words=['carlos','hector','alberto','pedro','jorge'];
var cantWord=words.length;

for (var contador=0 ;contador<cantWord;
    contador++){
        alert(words[contador]);
    }
/*
    b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/

for (var contador=0; contador<cantWord;
        contador++)
                {
                words[contador] = words[contador].substring(0,1).toUpperCase()+ words[contador].substring(1).toLowerCase();
                alert(words[contador]);
                } 
/*
    c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para
     ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
var sentence= [];
for (var contador=0 ;contador<cantWord;
    contador++){
        sentence.push(words[contador]);
    }
   alert(sentence);
/*
    d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final
     de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la 
     consola del navegador el al array final (utilizar console.log).
*/

var nArray=[];

for (var i=0 ; i<10;
    i++){
        nArray.push(i);
    }
    console.log(nArray);

    //Funciones

/*
    a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable,
     mostrando el valor de dicha variable en la consola del navegador.
 */

function suma(valor1,valor2) {
    var resultado=valor1+valor2;
    return resultado;
    }
var mensaje= suma(10,10)
    console.log(mensaje)

 /*
    b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno 
    de los parámetros tiene error y retornar el valor NaN como resultado.
*/
function suma(valor1,valor2) {
    if (isNaN(valor1) || isNaN(valor2)){
        alert('uno de los valores no es un numero');
      }
    return NaN;
    }

var mensaje2= suma('n');
console.log(mensaje2)
    
/*
    c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/
function validateInteger(x){
   return (Number.isInteger(x))
    }

console.log(validateInteger(10));

/*
    d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales
     mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

   function suma(valor1,valor2){
    if (isNaN(valor1) || isNaN(valor2)){
        alert ('uno de los valores no es un numero');
        return NaN;
    } else if (Number.isInteger(valor1) && Number.isInteger(valor2)){
        return valor1 + valor2;
    } else {
        alert ('uno de los valores es decimal');
        return Math.round(valor1,valor2);
    }
}
var mensaje3=suma(20.5);
console.log(mensaje3);
    
/*
    e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

function validar(valor1,valor2){
    if (isNaN(valor1) || isNaN(valor2)){
        alert ('uno de los valores no es un numero');
        return NaN;
    } else{
        return 'los valores son numeros';
    }
}

function suma(valor1,valor2){
    var resultado = validar(valor1,valor2);
    if (resultado === 'los valores son numeros'){
     return valor1 + valor2;
    } else{
    return 'uno de los valores no es un numero';
        }
    }

var mensaje4=suma(20,20);
console.log(mensaje4);
