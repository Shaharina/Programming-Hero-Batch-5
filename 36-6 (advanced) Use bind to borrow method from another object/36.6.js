const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('hurrr', this)

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
kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalGolu);
normalTreatDey(2000);
