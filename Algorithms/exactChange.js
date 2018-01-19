function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.
  var total = 0;
  var register = [0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
  var returnChange = [];
  for(i=0;i<cid.length;i++){
    total += cid[i][1];
  }

  total = Math.round(total * 100)/100;

  if(change === total){
    return 'Closed';
  } else if(total < change){
    return 'Insufficient Funds';
  } else {
    for(i = cid.length - 1; i > -1; i--){
      var value = 0;

      while(cid[i][1] > 0 && change >= register[i] ){
        change -= register[i];
        change = Math.round(change * 100)/100;

        cid[i][1] -= register[i];
        value += register[i];
      }
      if(value > 0){
        returnChange.push([cid[i][0] , value]);

      }
    }
  }

  if(returnChange.length < 1 || change > 0){
    return 'Insufficient Funds';
 }

  return returnChange;

}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

//returns "Insufficient Funds"
