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


let answer = parseInt(prompt('Please enter a number!'))

for (i=1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 ===0) {
        console.log('Buzz');
    }
    else console.log(i);  
}