
// Getting html elements for action:
let button = document.querySelector('button');
let table = document.querySelector('table');
let result = document.querySelector('#result');

table.innerHTML = "";
function calculateFutureValue() {
  // Getting data from user input
  let deposit = +document.querySelector('#deposit').value;
  let payment = +document.querySelector('#payment').value;
  let rate= +document.querySelector('#rate').value;
  let days = +document.querySelector('#days').value;

  while (true) {
    // Error checking user input
    if (deposit != Math.abs(deposit)) { break; }
    if (payment != Math.abs(payment)) { break; }
    if (rate != Math.abs(rate) || rate >100) { break; }
    if (days != Math.abs(days)) { break; }
    if (days != Math.trunc(days)) { break; }

    // variables correction
    let month = days/30;
    rate = rate/12/100;

    // Future Value Calculation
    for ( increment=0; increment<month; increment++ ) {
      deposit += deposit * rate;
      console.log(deposit*rate);
      deposit += payment;
      table.innerHTML += `
      <tr>
        <td>${(increment+1)}</td>
        <td>${(deposit+=deposit*rate).toFixed(2)}</td>
        <td>${(deposit*rate).toFixed(2)}</td>
      </tr>
        `;
      // deposit += ( deposit * rate ) + payment;
    }
    console.log('OK ');
    result.style = "display:flex;";
    result.innerHTML = ` $ ${deposit.toFixed(2)}`;
    return deposit;
  }
  console.log('NaN');
  return NaN;
}

button.addEventListener('click', calculateFutureValue);
