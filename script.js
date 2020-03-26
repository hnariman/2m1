// get html elements: 
const button = document.querySelector('button');
const table = document.querySelector('table');
const errorMessage = document.querySelector('#error');
const result = document.querySelector('#result');

// fire alarm when error :) 
function error(element) {
  errorMessage.innerHTML = `${element} указан неверно!`;
  //  alert(`${element} is not a correct value`);
}

function output(someResult, target){
  target.innerHTML = ` ${someResult.toFixed(2)}`;
  target.style.visibility = "visible";
}

// main calculator
function calculateFutureValue(deposit, days, rate, payment) {
  const month = days / 30;
  const monthlyRate = rate / 12 / 100;
  let final = deposit;

  for (increment = 1; increment < month; increment++) {
    final += deposit * monthlyRate;
    final += payment;
  }
  output(final,result);
  return final;
}

// main wrapper function:
function main() {

  // reset errors and indicators:
  errorMessage.innerHTML = "";
  result.style.visibility = "hidden";

  // get data from user input
  const deposit = +document.querySelector('#deposit').value;
  const payment = +document.querySelector('#payment').value;
  const rate = +document.querySelector('#rate').value;
  const days = +document.querySelector('#days').value;

  if (deposit != Math.abs(deposit)) { error('deposit'); }
  else if (payment != Math.abs(payment)) { error('payment'); }
  else if (rate != Math.abs(rate) || rate > 100) { error('rate'); }
  else if (days != Math.abs(days)) { error('days'); }
  else if (days != Math.trunc(days)) { error('days'); }
  else {
    calculateFutureValue(deposit, days, rate, payment);
  }
  return NaN;
}

button.addEventListener('click', calculateFutureValue);