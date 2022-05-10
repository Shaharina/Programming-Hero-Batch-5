const bottle = {
    color: 'yellow',
    hold: 'water',
    price: '50',
    isCleaned: true
};

//getting all properties name
const keys = Object.keys(bottle);
console.log(keys);

//getting all values
const values = Object.values(bottle);
console.log(values);

//getting all values and names
const pairs = Object.entries(bottle);
console.log(pairs);

//nothing can add or delete only edit
Object.seal(bottle);
bottle.price = 100;

//nothing you can change
Object.freeze(bottle);

delete bottle.isCleaned;
console.log(bottle);