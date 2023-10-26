
function updateBill(val) {

  // Tip Percent slider
  var bill = parseFloat(document.getElementById('bill_total_field').value = val);

  var billPercent = parseFloat(document.getElementById('bill_percent_field').value);

  var tipPercent = parseFloat(document.getElementById('tip_percent_field').value =  `${billPercent}%`);
  
  //calculate bill amount
  var tipValue = tipPercent * (val/100);
  tipValue = tipValue.toFixed(2);
 


  document.getElementById('tip_amount_field').value= `${'$' + tipValue}`;

  val = +val + +tipValue;


  document.getElementById('total_bill_field').value=`${'$' + val}`;


}


function updateTipInput(val) {

  // Tip Percent slider
  var tipPercent = document.getElementById('tip_percent_field').value = `${val}%`;

  //assign bill_total_field to the bill
  var bill = Number(document.getElementById('bill_total_field').value);

  //calculate bill amount
  var tipValue = val * (bill/100);
  tipValue = tipValue.toFixed(2);
  var grandTotal = bill + (val * (bill/100));
  grandTotal = grandTotal.toFixed(2);



  document.getElementById('tip_amount_field').value=`${'$' + tipValue}`;

  document.getElementById('total_bill_field').value=`${'$' + grandTotal}`;


}
