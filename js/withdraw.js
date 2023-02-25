document.getElementById('btn-widthdraw').addEventListener('click', function() {
    const widthdraw = document.getElementById('user-widthdraw');
    const widthdrawAmount = document.getElementById('widthdraw_amount');
    const totalAmount = document.getElementById('total_amount');
    widthdrawAmount.innerText = parseInt(widthdrawAmount.innerText) + parseInt(widthdraw.value);
    totalAmount.innerText = parseInt(totalAmount.innerText) - parseInt(widthdraw.value);
    widthdraw.value = '';
});

