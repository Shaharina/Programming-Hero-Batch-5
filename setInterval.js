console.log('1');
//setInterval(() => {
//   console.log('tik tik tik')
//}, 1000)

let seconds = 0;
const timeId = setInterval(() => {
    //seconds++;
    console.log(seconds++);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)

console.log('2');

