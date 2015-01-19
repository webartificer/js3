//Phone Number//
var phoneNum = prompt("Please enter your phone number with dashes. \n(We will not use your number for spam.)");
var phoneValid = (phoneNum.charAt(3) === "-" && phoneNum.charAt(7) === "-");
alert("Valid? " + phoneValid);

//Birth Date//
var bDay = prompt("Please enter your birthday in the following format xx/xx/xx.");
var birthValid = (bDay.charAt(2) === "/" && bDay.charAt(5) === "/");
alert("Valid? " + birthValid);

//Postal Code//
var zipCode = prompt("Please enter your postal code in xxxxx or xxxxx-xxxx formats.");
var zipValid = (zipCode.length === 5 || zipCode.length === 10 && zipCode.charAt(5) ==="-");
alert("Valid? " + zipValid);

//State Abbreviation//
var state = prompt("Please enter your state. Please use 2 capitalized characters.");
var stateValid = (state.length === 2 && state.substring(0,2).toUpperCase() === state.substring(0,2));
alert("Valid? " + stateValid);

//Married?//
var married = prompt("Are you married? Yes or No?");
var marriedValid = (married.toLowerCase() === "yes" || married.toLowerCase() === "no");
alert("Valid? " + marriedValid);

