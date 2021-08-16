function getInputValue(inputId){
               
               const Input=document.getElementById(inputId);
               const inputAmounttext =Input.value;
  
               const  Amount= parseFloat(inputAmounttext);
  
               // clear input 
               Input.value='';

  
               return Amount;
}
function updateTotalfield(totalFieldId, Amount){
               const withAndDipoTotal=document.getElementById(totalFieldId);
               const TotalText=withAndDipoTotal.innerText;
               
               const previousTotal = parseFloat(TotalText);
               withAndDipoTotal.innerText=previousTotal + Amount;
              
}
function getCurrentBalance(){
               const balanceTotal=document.getElementById('balance-total');
               const balanceTotalText=balanceTotal.innerText;
               const previousBalanceTotal= parseFloat(balanceTotalText);
              return previousBalanceTotal;
}

function updateBalance(dipositAmount, isAdd){
                const balanceTotal=document.getElementById('balance-total');
               // const balanceTotalText=balanceTotal.innerText;
               // const previousBalanceTotal= parseFloat(balanceTotalText);
              const previousBalanceTotal =getCurrentBalance();
if(isAdd==true){
               balanceTotal.innerText = previousBalanceTotal + dipositAmount;
}
else{
               balanceTotal.innerText = previousBalanceTotal - dipositAmount;          
}
}







document.getElementById('deposit-button').addEventListener('click',function(){
               // console.log('vallage na');

//                const dipositInput=document.getElementById('deposit-input');
//                const dipositAmounttext =dipositInput.value;
//   const  dipositAmount= parseFloat(dipositAmounttext);

//const dipositAmount=getInputValue('deposit-input');
               // console.log(dipositAmount);
               // get currient diposit 
//                const dipositeTotal=document.getElementById('deposit-total');
//                const dipositTotalText=dipositeTotal.innerText;
//                const previousDepositTotal = parseFloat(dipositTotalText);
//               dipositeTotal.innerText=previousDepositTotal + dipositAmount;
//                console.log(dipositTotalText);
//updateTotalfield('deposit-total',dipositAmount);
               // update balance 
               // const balanceTotal=document.getElementById('balance-total');
               // const balanceTotalText=balanceTotal.innerText;
               // const previousBalanceTotal= parseFloat(balanceTotalText);
               // balanceTotal.innerText= previousBalanceTotal + dipositAmount;
               const dipositAmount=getInputValue('deposit-input');
               if(dipositAmount>0){
                              updateTotalfield('deposit-total',dipositAmount);
                              updateBalance(dipositAmount,true);
               }
              
});


document.getElementById('withdraw-button')
.addEventListener('click',function(){
              
               // const withdrawInput =document.getElementById('withdraw-input');
               // const withdrawAmountText =withdrawInput.value;
               // const withdrawAmount=parseFloat(withdrawAmountText);

//const withdrawAmount= getInputValue('withdraw-input');


// const withdrawTotal = document.getElementById('withdraw-total');
// const withdrawTotalText =withdrawTotal.innerText;
// const previouswithdrawtotal=parseFloat(withdrawTotalText);
// // console.log(withdrawTotalText);


// withdrawTotal.innerText=previouswithdrawtotal+withdrawAmount;
////updateTotalfield('withdraw-total',withdrawAmount);


               // update balance 
               // const balanceTotal=document.getElementById('balance-total');
               // const balanceTotalText=balanceTotal.innerText;
               // const previousBalanceTotal= parseFloat(balanceTotalText);
               // balanceTotal.innerText= previousBalanceTotal - withdrawAmount;
               
               
               const withdrawAmount= getInputValue('withdraw-input');
               const CurrentBalance =getCurrentBalance();
               if(withdrawAmount>0 && withdrawAmount<CurrentBalance){
                              updateTotalfield('withdraw-total',withdrawAmount);
updateBalance(withdrawAmount,false);
               }
               if (withdrawAmount > CurrentBalance){
                              console.log('rakso joto paba toto.......besi chaw keno?')
               }
               
// // clear withdraw input 
// withdrawInput.value='';
               
})