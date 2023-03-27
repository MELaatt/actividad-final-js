let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

let suma = 0;

if (num1 > num2) {

  let temp = num1;
  num1 = num2;
  num2 = temp;
}

for (let i = num1; i <= num2; i++) {
  
  if (i % 2 !== 0) {
    
    console.log(i);
    suma += i;
  }
}

console.log("La suma de los números impares es: " + suma);
