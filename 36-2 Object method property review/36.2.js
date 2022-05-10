const student = {
    id: 101,
    name: 'Rj Kibria',
    major: 'Biology',
    money: 5000,
    bestFriend: {
        name: 'sabrina',
        age: 22,


    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}



student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);