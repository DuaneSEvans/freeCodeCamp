/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

// Roman numerals: I V X L C D M

function convertToRoman(dNum) {
    
    const romanNumeralDoubles = {
        900: "CM",
        400: "CD",
        90: "XC",
        40: "XL",
        9: "IX",
        4: "IV"
    };

    const romanNumerals = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
    }

    let div = 10;
    let rem = 0;
    let rem1 = 0;
    let rNum = ""; 

    while (dNum !== 0) {
        rem = dNum % div;
        
        if (rem > 999) {
            rNum = romanNumerals[div / 10].repeat((rem / (div / 10))) + rNum;
        }
        else if (rem in romanNumeralDoubles) {
            rNum = romanNumeralDoubles[rem] + rNum; 
        }
        else if (rem >= div / 2) {
            rNum = romanNumerals[div / 10].repeat((rem % (div / 2)) / (div / 10)) + rNum;
            rNum = romanNumerals[div / 2]+ rNum;
        }
        else {
            rNum = romanNumerals[div / 10].repeat(rem / (div / 10)) + rNum;
        }

        dNum -= rem;
        div *= 10;
    }
    return rNum;
}
   console.log(convertToRoman(68));