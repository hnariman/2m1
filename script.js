// Getting html elements for action:
const button = document.querySelector('button');
const result = document.querySelector('#result');

function calculateFutureValue(deposit, payment, rate, days) {
  // Getting data from user input
  const deposit = +document.querySelector('#deposit').value;
  const payment = +document.querySelector('#payment').value;
  const rate= +document.querySelector('#rate').value;
  const days = +document.querySelector('#days').value;

  // Error checking user input
  function error(element) { alert(`${element} is not a correct value`); console.log('problem'); }
  if (deposit != Math.abs(deposit)) { 
    alert('deposit');
    error(deposit); 
  }
  else if (payment != Math.abs(payment)) { error(payment); }
  else if (rate != Math.abs(rate) || rate > 100) { error(rate); }
  else if (days != Math.abs(days)) { error(days); }
  else if (days != Math.trunc(days)) { error(days); }
  else {
    // variables correction
    const month = days / 30;
    let monthlyRate = rate / 12 / 100;

    // Future Value Calculation
    let result = 0;
    for (increment = 0; increment < month; increment++) {
      result += deposit * monthlyRate;
      console.log(deposit * monthlyRate);
      result += payment;
    }
    result.innerHTML = ` Future value is ${result.toFixed(2)}`;
    return result;
  }
}

button.addEventListener('click', calculateFutureValue);
