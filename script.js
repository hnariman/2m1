// Getting html elements for action:
const button = document.querySelector('button');
const table = document.querySelector('table');
const result = document.querySelector('#result');
const errorMessage = document.querySelector('#error');

function calculateFutureValue() {
  // Getting data from user input
  errorMessage.innerHTML = "";
  result.style.visibility = "hidden";
  const deposit = +document.querySelector('#deposit').value;
  const payment = +document.querySelector('#payment').value;
  const rate = +document.querySelector('#rate').value;
  const days = +document.querySelector('#days').value;

  // Error checking user input
  function error(element) {
    errorMessage.innerHTML = `${element} указан неверно!`;
    // alert(`${element} is not a correct value`);
  }
  if (deposit != Math.abs(deposit)) { error('deposit'); }
  else if (payment != Math.abs(payment)) { error('payment'); }
  else if (rate != Math.abs(rate) || rate > 100) { error('rate'); }
  else if (days != Math.abs(days)) { error('days'); }
  else if (days != Math.trunc(days)) { error('days'); }
  else {
    // variables correction
    const month = days / 30;
    const monthlyRate = rate / 12 / 100;

    // Future Value Calculation
    let final = deposit;
    for (increment = 0; increment < month; increment++) {
      final += deposit * monthlyRate;
      final += payment;
    }
    result.innerHTML = ` ${final.toFixed(2)}`;
    result.style.visibility = "visible";
    return result;
  }
  return NaN;
}

button.addEventListener('click', calculateFutureValue);