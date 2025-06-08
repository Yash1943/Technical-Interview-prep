function palidrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palidrome("YJY"));