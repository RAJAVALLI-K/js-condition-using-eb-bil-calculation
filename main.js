// 1-Write a program to input the electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.


let units = parseInt(prompt('Enter a number:'));
if (units <= 50) {
    bill = units * 0.50
}
else if (units <= 100) {
    bill = 25 + (units - 50) * 0.75;
}
else if (units <= 150) {
    bill = 100 + (units - 150) * 1.20;
}
else if (units > 250) {
    bill = 220 + (units - 250) * 1.50;
}

if (bill > 150) {
    var bill = bill + bill * 0.2;
}

console.log(bill);