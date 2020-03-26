// Getting html elements for action:
const button = document.querySelector('button');
const table = document.querySelector('table');
const result = document.querySelector('#result');
const errorMessage = document.querySelector('#error');

// Getting data from user input
const deposit = document.querySelector('#deposit');
const payment = document.querySelector('#payment');
const rate = document.querySelector('#rate');
const days = document.querySelector('#days');

function calculateFutureValue(deposit, payment, rate, days) {
  const depositValue  = deposit.value;
  const paymentValue  = payment.value;
  const rateValue  = rate.value;
  const daysValue  = days.value;
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
    result.style = "display:flex";
    return result;
  }
  return NaN;
}
button.addEventListener('click', calculateFutureValue);