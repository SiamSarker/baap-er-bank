document.getElementById('btn-deposit').addEventListener('click', function() {
    const deposit = document.getElementById('user-deposit');
    const depositAmount = document.getElementById('deposit_amount');
    const totalAmount = document.getElementById('total_amount');
    depositAmount.innerText = parseInt(depositAmount.innerText) + parseInt(deposit.value);
    totalAmount.innerText = parseInt(totalAmount.innerText) + parseInt(deposit.value);
    document.getElementById('user-deposit').value = '';
});

