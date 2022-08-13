
function handleChangeProduct(isIncrease,product,price){
   const productInputNum = getInputValue(product);
   let productInputNew = productInputNum;
   if(isIncrease == false && productInputNum > 0){
      productInputNew = productInputNew - 1;
   }
   if(isIncrease == true){
      productInputNew = productInputNew + 1;
   }
   document.getElementById(product +'Input').value = productInputNew;
   const totalProductPrice =  productInputNew * price;
   document.getElementById(product + 'Price').innerText = totalProductPrice;
   calculator();
}

function calculator(){
   const phnInputNum = getInputValue('phn')
   const caseInputNum = getInputValue('case');

   const subTotal = phnInputNum * 1219 + caseInputNum * 59;
   document.getElementById('subtotal').innerText = subTotal;

   const subTotalWTax = subTotal * 0.06;
   document.getElementById('tax').innerText = subTotalWTax.toFixed(2);

   const grandTotal = subTotal + subTotalWTax;
   document.getElementById('grandTotal').innerText = grandTotal.toFixed(2);
   
}
function getInputValue(product){
   const productInput = document.getElementById(product + 'Input').value;
   const productInputNum = parseFloat(productInput);
   return productInputNum;
}