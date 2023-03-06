// const select = document.querySelector('select');
// const para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   const choice = select.value;

//     switch(choice){

//         case'sunny' :
//             para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//             break;
//         case'rainy' :
//             para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//             break;
//         case'snowing':
//             para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//             break;
//         case'overcast':
//             para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//             break;
//         default : para.textContent = '';
//   }
// }

// if (choice == 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December'){
// 	let days = 31;
// } else if (choice == 'February') {
// 	let days = 28;
// } else {
// 	let days = 30;}



// //// TASK arrow functions

// const ask = (question, ok, cancel) => {
//     if (confirm(question)) ok();
//     else cancel();
// }

// ask (
//     'Do you agree?', 
//     () => {alert('You agreed.'); },
//     () => {alert('You canceled the execution.');}
// );






//// TASK FizzBuzz
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number


// let answer = parseInt(prompt('Please enter a number!'))

// for (i=1; i <= answer; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (i % 5 ===0) {
//         console.log('Buzz');
//     }
//     else console.log(i);  
// }








// //// PRIME NUMBERS // loops with a label

// const userInput = parseInt(prompt('Enter number'))

// nextPrime:
// for (let i = 2; i <= userInput ; i++){

//     for (let j = 2; j < i; j++){
//         if (i % j == 0) continue nextPrime;
//     }

//     console.log(i);
// }




// let num ;

// do {
//     num = prompt('Enter a number greater than 100!', 0);
// } while (num <= 100 && num);``






// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]


//   people.reduce((max,val) => {
//     if (val.yearOfBirth > max.yearOfBirth) return val;
//     return max;
//   }
//   )





// //// EX 13 JS - Caeser encoding

// const caesar = function(str, shift) {
//     const abc = 'abcdefghijklmnopqrstuvwxyz'
//     let newString = ''

//     for (i = 0 ; i < str.length ; i++){
//         let ltr = str[i].toLowerCase()
//         let idx = abc.indexOf(ltr)
//         if (idx == -1) {
//             newString += str[i]; 
//             continue;
//         }

//         let newIdx = idx + shift;
//         if (newIdx > 25) newIdx = newIdx - 25;
//         if (str[i] === str[i].toUpperCase()){
//             newString += abc[newIdx].toUpperCase()
//             continue;
//         }
//         newString += abc[newIdx];
        

//     }

//     return newString;
// };







// //// DOM MANIPULATION

// const container = document.querySelector('#container');

// // creating children in container
// const para = document.createElement('p');
// para.textContent = 'Hey I\'m red!';
// para.style.cssText = 'color: red;';
// container.appendChild(para)

// const h3 = document.createElement('h3');
// h3.textContent = 'I\'m a blue h3!';
// h3.style.cssText = 'color: blue;';
// container.appendChild(h3);

// // creating nested div with children
// const div = document.createElement('div');
// div.style.cssText = "border: solid black; background-color: pink;"

// const divH1 = document.createElement('h1');
// divH1.textContent = 'I\'m in a div';
// div.appendChild(divH1);

// const divPara = document.createElement('p');
// divPara.textContent = 'ME TOO!';
// div.appendChild(divPara);
// container.appendChild(div);


// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

// const btn2 = document.querySelector('#btn2');
// btn2.addEventListener('click', () => {
//     alert('Hello World');
// })


// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function(e){
//     e.target.style.background = 'blue';
// })



//// selecting several eventListen
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
