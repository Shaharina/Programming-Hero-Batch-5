const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('hurrr', this)
        return this.money;

    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const normalGolu = {
    id: 102,
    money: 8000,
    name: 'Normal Golu',
}

//call
//kibria.treatDey.call(heroBalam, 500, 100, 50);
//kibria.treatDey.call(heroBalam, 300, 50, 30);
kibria.treatDey.apply(heroBalam, [400, 100, 50])
kibria.treatDey.apply(heroBalam, [1000, 200, 100])
kibria.treatDey.apply(normalGolu, [700, 100, 70])