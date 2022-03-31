//1
let min = prompt("Escriba el valor mínimo");
let max = prompt("Escriba el valor máximo");
let arr1 = []; 
for (let i=0; i<20; i++){

arr1[i]=Math.floor((Math.random() * (max - min + 2)) + (min+1));
}
console.log(arr1);