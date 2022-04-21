// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input').value;
  const sub = parseInt(price.innerText)* parseInt(quantity);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sub;
  return parseInt(sub)
}
 // ITERATION 2 - 3
function calculateAll() {
let total =0
var multiProduct = Array.from(document.getElementsByClassName("product"));
for(let product of multiProduct){
  total += updateSubtotal(product)
}
document.querySelector("#total-value span").innerText = total
}
// ITERATION 4
/*function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);}
  //... your code goes here*/

BTN = document.createElement("button");
var text = document.createTextNode("click to remove me again");
BTN.appendChild(text);  

// ITERATION 5
function createProduct() {
  //... your code goes here
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});