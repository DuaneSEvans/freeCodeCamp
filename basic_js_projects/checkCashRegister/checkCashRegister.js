function checkCashRegister(price, cash, cid) {

    // determine total amount of cash in drawer
    // first check if the total amount required in change does not exceed the total amount in the drawer
    const moneyValue = {
      "ONE HUNDRED": 100.00,
      "TWENTY": 20.00,
      "TEN": 10.00,
      "FIVE": 5.00,
      "ONE": 1.00,
      "QUARTER": 0.25,
      "DIME": 0.10,
      "NICKEL": 0.05,
      "PENNY": 0.01
    };

    cid = cid.reverse();
    let dif = cash - price;

    const change = {
      status: "",
      change: []
    }
    
    function countTotal(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i][1];
      }
      return sum;
    }
    coinsNeeded(cid);
    function coinsNeeded(arr) {
      return arr.filter(subArray => moneyValue[subArray[0]] <= dif);
    }
    

    // Check for insufficient funds. Only check the denominations that would actually be needed to return the change.
    if (countTotal(coinsNeeded(cid)) < dif) {
      change.status = "INSUFFICIENT_FUNDS";
      return change;
    }
    else if (countTotal(coinsNeeded(cid)) >= dif && countTotal(cid) > dif) {
      let changeAmount;

      for (let i = 0; i < Object.keys(moneyValue).length; i++) {
        // Try to remove max amount of this denomination in cid
        changeAmount = 0;
        while (cid[i][1] > 0 && Object.values(moneyValue)[i] <= dif) {
          dif = (dif - Object.values(moneyValue)[i]).toFixed(2);
          cid[i][1] -= Object.values(moneyValue)[i];
          changeAmount += Object.values(moneyValue)[i];
        }

        if (changeAmount !== 0) {
          change.change.push([Object.keys(moneyValue)[i], changeAmount]);
        }
      }
      change.status = "OPEN";
      return change;
    }
    else {
      change.status = "CLOSED";
      change.change = cid.reverse();
      return change;
    }

  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));