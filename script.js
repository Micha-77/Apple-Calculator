const button = document.querySelectorAll('button'),
time = document.querySelector('.time')
charge = document.querySelector('#charge')
operandBtn = document.querySelectorAll('.operandBtn')
textArea = document.querySelector('.textArea')
clearBtn = document.querySelector('.clearBtn')
numBtn = document.querySelectorAll('.numBtn')
smallText = document.querySelector('.smallTextArea')
equalBtn = document.querySelector('.equal');

let firstNum;
let secondNum;
let operator;
let string = "";


numBtn.forEach(Btn => { // change background and color of orange button when clicked
    Btn.addEventListener('click', () => {
    textArea.textContent += Btn.textContent;
    })
})

button.forEach(Btn => { // decrease opacity of buttons when mousedown
    Btn.addEventListener('mousedown', () => {
    Btn.style.opacity = "0.7";
})
})

button.forEach(Btn => { // return opacity of buttons to original state when mouseup
    Btn.addEventListener('mouseup', () => {
    Btn.style.opacity = "1";
})
})

operandBtn.forEach(Btn => { // change background and color of orange button when clicked
    Btn.addEventListener('click', () => {
    Btn.style.color = "#FF9500";
    Btn.style.backgroundColor = "white";
    operator = Btn.value;
    textArea.textContent += Btn.value;
    })
})




equalBtn.addEventListener('click', () => {
    textArea.textContent = eval(textArea.textContent);

    operandBtn.forEach(Btn => { 
        Btn.style.color = "white";
        Btn.style.backgroundColor = "#FF9500";
    })
    })


clearBtn.addEventListener('click', clearDisplay); // event which works on AC button when clicked

function clearDisplay() { // function to equalize display text to 0
    textArea.textContent = ""
}



// setting time to local time paying attention to the presence of a zero before the number when it's one digit
function Nowtime() {
let date = new Date()
let hour = date.getHours().toString().length;
let min = date.getMinutes().toString().length;
if (hour == 1 && min == 1) {
    time.textContent = "0" + date.getHours() + ":" + "0" + date.getMinutes();
} else if (hour == 1 && min != 1) {
    time.textContent = "0" + date.getHours() + ":" + date.getMinutes();
} else if (hour != 1 && min == 1) {
    time.textContent = date.getHours() + ":" + "0" + date.getMinutes();
} else if (hour != 1 && min != 1) {
    time.textContent = date.getHours() + ":" + date.getMinutes();
}
}
setInterval(Nowtime, 1000); // setting interval of a second to run the mentioned function


let randomNum = Math.floor(Math.random() * 100) // create a random number between 0-99
charge.textContent = `${randomNum}`; // change battery percentage randomly
charge.style.backgroundImage =  `linear-gradient(to right, white 0%, white ${randomNum}%, gray ${randomNum}%, gray 100%)`; // change background of battery according to random charge number




// // add, subtract, multiply and divide functions
// function add(a, b, oper = "+") {
//     return parseInt(a + oper + b);
//     textArea.textContent =  parseInt(a + oper + b);
// }
// function subtract(a, b, oper = "-") {
//     textArea.textContent =  parseInt(a + oper + b);
// }
// function multiply(a, b, oper= "*") {
//     textArea.textContent =  parseInt(a + oper + b);
// }
// function divide(a, b, oper = "/") {
//     textArea.textContent =  parseInt(a + oper + b);
// }



// function operate(firstNum, secondNum, operator) {
//     if (operator = "+") {
//         return add(firstNum, secondNum, operator)
//     } else if (operator = "-") {
//         return subtract(firstNum, secondNum, operator)
//     } else if (operator = "*") {
//         return multiply(firstNum, secondNum, operator)
//     } else if (operator = "/") {
//         return divide(firstNum, secondNum, operator)
//     }
// }

