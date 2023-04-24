function checkCashRegister(price, cash, cid) {
	let change = {status:"", change:[["PENNY",0],["NICKEL",0],["DIME",0],["QUARTER",0],["ONE",0],["FIVE",0],["TEN",0],["TWENTY",0],["ONE HUNDRED",0]]};
	let sumreg =
	cid[0][1]+
	cid[1][1]+
	cid[2][1]+
	cid[3][1]+
	cid[4][1]+
	cid[5][1]+
	cid[6][1]+
	cid[7][1]+
	cid[8][1]
	sumreg = sumreg.toFixed(2)

	let coins = [(cid[0][1]/0.01),(cid[1][1]/5)*100,(cid[2][1]/0.1),(cid[3][1]/0.25),(cid[4][1]/1),(cid[5][1]/5),(cid[6][1]/10),(cid[7][1]/20),(cid[8][1]/100)]
	let values = {"ONE HUNDRED":100,"TWENTY":20,"TEN":10,"FIVE":5,"ONE":1,"QUARTER":0.25,"DIME":0.1,"NICKEL":0.05,"PENNY":0.01}

	let returned = cash - price
	if (returned > sumreg){
	  change.status = "INSUFFICIENT_FUNDS"
	  change.change = []
	  return change
	} else
	if (returned == sumreg){
	  change.status = "CLOSED"
	  change.change = cid
	  return change
	}
	cid = cid.reverse();
	for (let x of cid){
	  let temp = [x[0], 0]
	  while (returned >= values[temp[0]] && x[1] > 0){
		x[1] -= values[temp[0]]
		temp[1] += values[temp[0]]
		returned = (returned-values[temp[0]]).toFixed(2)
	  }
	  if (temp[1] > 0){
		change.change.push(temp)
	  }
	}
	if (returned > 0) {
	  return { status: "INSUFFICIENT_FUNDS", change: [] };
	}
	for (let i = 0; i < change.change.length; i++){
	  if (change.change[i][1] == 0){
		change.change.splice(i,1)
		i -= 1
	  }
	}
	return { status: "OPEN", change: change.change};
  }

  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
