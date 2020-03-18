let button = document.querySelector('button');

function getValue() {
    let deposit = document.querySelector('#deposit').value;
    console.log(deposit);
    return deposit;
}

button.addEventListener('click', getValue);