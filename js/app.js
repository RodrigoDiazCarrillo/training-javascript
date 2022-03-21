
//Ejercicio 1
let actualDate = new Date();
let actualMonth = actualDate.getMonth();

switch (actualMonth) {
  case 0:
    console.log("Enero: 31");
    break;
  case 1:
    console.log("Febrero: 28");
    break;
  case 2:
    console.log("Marzo: 31");
    break;
  case 3:
    console.log("Abril: 30");
    break;
  case 4:
    console.log("Mayo: 31");
    break;
  case 5:
    console.log("Junio: 30");
    break;
  case 6:
    console.log("Julio: 31");
    break;
  case 7:
    console.log("Agosto: 31");
    break;
  case 8:
    console.log("Septiembre: 30");
    break;
  case 9:
    console.log("Octubre: 31");
    break;
  case 10:
    console.log("Noviembre: 30");
    break;
  case 11:
    console.log("Diciembre: 31");
    break;
}

//Ejercicio 2

let result = window.prompt("Escriba un mes");

switch (result) {
  case "enero":
    alert("Enero: 31");
    break;
  case "febrero":
    alert("Febrero: 28");
    break;
  case "marzo":
    alert("Marzo: 31");
    break;
  case "abril":
    alert("Abril: 30");
    break;

  case "mayo":
    alert("Mayo: 31");
    break;
  case "junio":
    alert("Junio: 30");
    break;
  case "julio":
    alert("Julio: 31");
    break;
  case "agosto":
    "Agosto: 30";
    break;
  case "septiembre":
    alert("Septiembre: 30");
    break;
  case "octubre":
    alert("Octubre: 31");
    break;
  case "noviembre":
    alert("Noviembre: 30");
    break;
  case "diciembre":
    alert("Diciembre: 31");
    break;
    default: alert("That’s not a real month");
    break;
}

//Ejercicio 3
let temp = window.prompt("Escriba la temperatura actual");

if (temp <15){alert("Warm up");}
if (temp >=15 && temp <=25){alert("Enjoy the weather!");}
if (temp >25){alert("Cool down");}

//Ejercicio 4
let isGreen=true;

if (isGreen ==true) {alert("Cross the road")}else alert("Please wait");

//Ejercicio 5

//Ejercicio 6

let email = window.prompt("Escriba su email (tolkien@lordofrings.com)");
let pass = window.prompt("Escriba su constraseña (aNBR6ZeWPY)");

if (email == "tolkien@lordofrings.com" && pass =="aNBR6ZeWPY"){
    alert("Welcome Mr. Tolkien");
} else {alert("Wrong password or username");}

//Ejercicio 7

let ctd = window.prompt("Inserte la cantidad");
let moneda = window.prompt("Escriba el nombre de la monteda (Dolar - Yen- Libra  - Franco");

switch (moneda){
    case "Dolar":
        alert(ctd + " euros equivalen a: "+ (ctd*1,1)+ " Dólares americanos");
    break;
    case "Yen":
        alert(ctd + "euros equivalen a: "+ (ctd*0,84)+ " Yenes");
    break;
    case "Libra":
        alert(ctd + "euros equivalen a: "+ (ctd*1,1)+ " Libras esterlinas");
    break;
    case "Franco":
        alert(ctd + "euros equivalen a: "+ (ctd*1,03)+ " Francos suizos");
    break;
    default:
        alert("Error");
    break;
}

//Ejercicio 8
let num1 = window.prompt("Escribe el primer número");
let num2 = window.prompt("Escribe el segundo número");
let op = window.prompt("Escribe la operación (suma,resta,multi ó divide");

switch (op){
    case "suma":
        console.log("suma: "+ (num1+num2));
    break;
    case "resta":
        console.log("Resta: "+ (num1-num2));
    break;
    case "multi":
        console.log("Multiplicación: "+ (num1*num2));
    break;
    case "divide":
        console.log("División: "+ (num1/num2));
    break;
    default:
        console.log("Error");
    break;
}

// Ejercicio 9

let dni = window.prompt("Introduzca su DNI (11111111X) o su NIE (X1111111Y");



// Ejercicio 10

let aleatorio1 = Math.floor(Math.random()*(6+1));
let aleatorio2 = Math.floor(Math.random()*(6+1));

console.log("PLayer1: "+ aleatorio1 + "-Player2: "+aleatorio2);
if (aleatorio1>aleatorio2){console.log("Player1 wins!");}
if (aleatorio2>aleatorio1){console.log("Player2 wins!");}
if (aleatorio2==aleatorio1){console.log("Draw");}