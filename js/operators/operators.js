function operators(mealCost, tipPercent, taxPercent){
// Write your code here
var mealcost, tipPercent, taxPercent;
var tip, tax, totalCost;
tip=(mealCost *(tipPercent/100));
tax=(mealCost *(taxPercent/100));
totalCost = (mealCost + tip + tax);
var cost = Math.round(totalCost);
console.log("The total meal cost is "+ cost + " dollars.");
}
//operators(12.00, 20, 8);
