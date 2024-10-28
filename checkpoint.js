//String Manipulation Functions:

//Exercice1:

function reverse(a) {
  let arr = a.split(""); //transform the string to an array
  let rarr = arr.reverse(); // reverse the array
  return rarr.join(""); // transofrm the arr rarr to a string and return it
}

console.log("Ex1: La chaîne reversée de Hello est",reverse("hello")); // appel de la fonction Reverse

//Exercice2:
function count(a) {
  return a.length;
}
console.log("Ex2: la longueur de hello world est",count("hello world")); // appel de la fonction count

//Exercice3:
function capitilize(sentence) {
  let arr = sentence.split(" "); //transform the sentence to an array ( chaque mot esst un élemnt de l'arr)
  arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1); // Capitalize the first letter of the first word
  return arr.join(" "); // Join the array back into a string
}
console.log("Ex3: Capitilize la premiére lettre de la phrase du (hello World) est",capitilize("hello world")); // appel de la fonction capitilize

// Array Functions:

//Exercice4:
function maxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    //looper le tableau
    if (arr[i] < min) {
      //tester si arr current est inférieur à min alors min reçoit current
      min = arr[i];
    }
    if (arr[i] > max) {
      //tester si arr current est supérieur à min alors min reçoit current
      max = arr[i];
    }
  }
  return [min, max];
}

// appel de la fonction maxMin
console.log('Ex4: le min max du tableau [5,0, 2, 3, 8, 4] est',maxMin([5,0, 2, 3, 8, 4]));

//Exercice 5:
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Exercie 5")
// appel de la fonction sum
console.log(' avec boucle for: la somme du tableau [0, 2, 3, 8, 4] est',sum([0, 2, 3, 8, 4]));
//ou

function sum1(arr) {
  let sumarr = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}
// appel de la fonction sum
console.log(' avec reduce: la somme du tableau [0, 2, 3, 8, 4] est',sum([0, 2, 3, 8, 4]));

//////////////////////
//Exercice 6:
function filter(arr, condition) {
  return arr.filter(condition);
}
let numbers=[1,2,3,4,5,6];
let evenNumbers= filter(numbers, num=>num%2===0);
console.log('Ex6: filter avec condition nombre pair du tableau [1,2,3,4,5,6] est',evenNumbers)

//Mathematical Functions:
//Exercice 7:
function factoriel(n) {
  let fac = 1;
  let num = 1;
  if (n === 0) {
    return 1;
  }
  while (num <= n) {
    fac = fac * num;
    num++;
  }
  return fac;
}
// appel de la fonction factoriel
console.log("Ex7")
console.log('Le factroiel de 3 est',factoriel(3));
console.log('Le factroiel de 4 est',factoriel(4));
console.log('Le factroiel de 0 est',factoriel(0));

//Exercice 8:
function prime(num) {
  if (num <= 1) return `${num} is not prime`;

  let div = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      div += 1;
      break;
    }
  }
  if (div > 0) {
    return `${num} is not prime`;
  } else {
    return `${num} is prime`;
  }
}
console.log("Ex8")
console.log(" Nombre non premier",prime(4)); // appel de la fonction factoriel
console.log(" Nombre premier",prime(3)); // appel de la fonction factoriel

//Exercice 9:
function fibonacci(n){
  let arr=[0,1]
  for (let i=2 ; i<n; i++){
    arr[i]=(arr[i-1]+(arr[i-2])) //la somme f(i)=f(i-1)+f(i-2)
    
  }
  return (arr)
}
console.log ( "Ex9: la suite fibonnaci de 5 est représenté par le tableau suivant",fibonacci(5))
