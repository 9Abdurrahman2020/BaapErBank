// deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
const inputField =document.getElementById('deposit-input');
const newDepositText = inputField.value;
const newDepositAmount =parseFloat(newDepositText);
const currentDeposit =document.getElementById('deposit-amount');
const currentDepositText = currentDeposit.innerText;
const currentDepositAmount = parseFloat(currentDepositText);
const totalDeposit = currentDepositAmount + newDepositAmount;
currentDeposit.innerText=totalDeposit;
const depositBalance = document.getElementById('deposit-balance');
const depositBalanceText = depositBalance.innerText;
const depositBalanceAmount = parseFloat(depositBalanceText);
const totalDepositBalance = totalDeposit + depositBalanceAmount;
depositBalance.innerText=totalDepositBalance;
inputField.value= '';
})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawValue = document.getElementById('withdraw-input');
   const withdrawValueText = withdrawValue.value;
   const newWithdrawAmount = parseFloat(withdrawValueText);
   const withdrawTotal = document.getElementById('withdraw-amount');
   const withdrawTotalText = withdrawTotal.innerText;
   const PreviousWithdrawAmount = parseFloat(withdrawTotalText);
   const totalWithdrawAmount = PreviousWithdrawAmount + newWithdrawAmount;
   withdrawTotal.innerText= totalWithdrawAmount;
   const depositBalanceWithdraw = document.getElementById('deposit-balance');
   const depositBalanceWithdrawText = depositBalanceWithdraw.innerText;
   const depositBalanceWithdrawAmount = parseFloat(depositBalanceWithdrawText);
   const totalBalanceAfterWithdraw = depositBalanceWithdrawAmount - totalWithdrawAmount;
   depositBalanceWithdraw.innerText=totalBalanceAfterWithdraw;
   

   withdrawValue.value= '';
})