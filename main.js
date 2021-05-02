"use strict";

// convert character digit to its string equivalent
function convert_digit(digit){
    switch (digit){
        case '0':
            return 'Zero';
        case '1':
            return 'One';
        case '2':
            return 'Two';
        case '3':
            return 'Three';
        case '4':
            return 'Four';
        case '5':
            return 'Five';
        case '6':
            return 'Six';
        case '7':
            return 'Seven';
        case '8':
            return 'Eight';
        case '9':
            return 'Nine';
        default:
            console.log("WHOOPS")
    }
}

// read args from command line
let arg_num = process.argv.slice(2);
let str = '';

// concatenates digit conversions
for(let i = 0; i < arg_num.length; i++){
    let num = '';
    for(let digit of arg_num[i]){
        num += convert_digit(digit);
    }
    str += num + ',';
}

console.log(str.slice(0,-1))


