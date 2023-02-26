function getAmount(elementID, amount) {
    const newObj = document.getElementById(elementID);
    const newAmount = parseFloat(newObj.value);
    const existedAmount = document.getElementById(amount);
    existedAmount.innerText = parseFloat(existedAmount.innerText) + newAmount;
    newObj.value = '';
    return newAmount;
}

document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositAmount = getAmount('user-deposit', 'deposit_amount');
    const totalAmount = document.getElementById('total_amount');
    totalAmount.innerText = parseFloat(totalAmount.innerText) + depositAmount;
});

document.getElementById('btn-widthdraw').addEventListener('click', function() {
    const withdrawAmount = getAmount('user-widthdraw', 'widthdraw_amount');
    const totalAmount = document.getElementById('total_amount');
    totalAmount.innerText = parseFloat(totalAmount.innerText) - withdrawAmount;
});


