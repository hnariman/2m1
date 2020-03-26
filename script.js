// Getting html elements for action:
let button = document.querySelector('button');
let result = document.querySelector('#result');

function calculateFutureValue(deposit, payment, rate, days) {
  // Getting data from user input
  let deposit = +document.querySelector('#deposit').value;
  let payment = +document.querySelector('#payment').value;
  let rate= +document.querySelector('#rate').value;
  let days = +document.querySelector('#days').value;

    // Error checking user input
    if (deposit != Math.abs(deposit)) { error('deposit'); return NaN; }
    if (payment != Math.abs(payment)) { error('payment'); return NaN; }
    if (rate != Math.abs(rate) || rate >100) { error('rate'); return NaN; }
    if (days != Math.abs(days)) { error('days'); return NaN; }
    if (days != Math.trunc(days)) { error('days'); return NaN; }
    function error(element){ alert(`${elemnet} is not a correct value`); }
    // variables correction
    let month = days/30;
    rate = rate/12/100;

    // Future Value Calculation
    for ( increment=0; increment<month; increment++ ) {
      deposit += deposit * rate;
      console.log(deposit * rate);
      deposit += payment;
      // deposit += ( deposit * rate ) + payment;
    }
    console.log('OK ');
    result.innerHTML = ` Future value is ${deposit.toFixed(2)}`;
    return deposit;
}

button.addEventListener('click', calculateFutureValue);
