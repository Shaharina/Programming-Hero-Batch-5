function doSomething() {
    console.log('I am java');
}

console.log('First: ami sobar age');
console.log('Second: i have no brain');
//doSomething();
//setTimeout(doSomething, 5000);
setTimeout(function () {
    console.log('I am using');
}, 5000);

setTimeout(() => {
    console.log('it is the faast')
}, 4000);
console.log('Third:I am the looser');