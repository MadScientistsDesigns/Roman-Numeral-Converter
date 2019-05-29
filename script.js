// User Case 1: Convert the given Arabic number into a roman numeral.

// User Case 2: All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    // get input
    num = document.getElementById("num").value;
    // Create an empty string for the result  
    let result = [];

    // list all relevant numbers and numerals
    let arabicNum = [1000000,500000,100000,50000,10000,5000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
     
    let romanNum = ["_M","_D","_C","_L","_X","_V","M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    // Loop through the numbers while the number is greater than the number, keep looping
    arabicNum.map((number, i) => { 
       while (num >= number) {
       // add numerals as you go --> loop numbers, find 1st, loop again, find 2nd
         result += romanNum[i];
         num -= number;
       }

    // add pop-up with result
       document.getElementById("answer").innerHTML = result;
      });
  }
//   end convertToRoman


  

  