let calculation = localStorage.getItem('calculation') || '';
displayResult();

/*let calculation = '';*/
if (!calculation){ // (calculation ==== null) == (!calculation) 
  calculation = '' ;
}
 
function calculatorUpdate(value){
  calculation += value; 
  displayResult();
  localStorage.setItem('calculation' , calculation);
}
//console.log(calculation);

function displayResult(){
  document.querySelector('.resultOnScreen').innerHTML = calculation ;
};