let button = document.querySelector('button');

function getValue(element) {
    element = document.querySelector(`${element}`).value;
    return element;
}

// Error checking as per technical task
function isPositive(value) {
    if (value === Math.abs(value)){
        return true;
    } else {
        return false; 
    }
};

function isInteger(value) {
    if (value === Math.trunc(value)) {
        return true;
    } else {
        return false;
    }
}
// main body of the code:


function calculateFinalDeposit(deposit, payment, rate, days) {
    months = days/30;
    console.log(`days: ${days}, months: ${months}`)
    let result = payment * ( ((1+rate)**months - 1)/rate);
    console.log(result);
    // for (let i = 0; i < months; i++){
        
    // }
}

// calculateFinalDeposit(deposit, payment, rate, days);

function printValues() {
    let a = getValue('#deposit');
    console.log(a);
}

document.querySelector('#result').innerHTML = "HELLO";


button.addEventListener('click', printValues);