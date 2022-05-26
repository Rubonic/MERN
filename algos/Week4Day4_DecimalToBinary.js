//https://www.rapidtables.com/convert/number/decimal-to-binary.html

//create a function that will accept a number and output the binary version of that number

function convertToBinary(num){
    let binaryResult = '';

    while (num > 0){
        binaryResult = (num%2) + binaryResult;
        num /= 2;
        num = Math.floor(num);
    }

    return parseInt(binaryResult);
}