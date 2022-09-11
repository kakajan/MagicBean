const car1 = "Fiat";
const car2 = "MVM";
const car3 = "BMW";
console.log(`${car1} - ${car2} - ${car3}`);
const cars = ['Fiat', 'MVM', 'BMW'];
console.log(`${cars[0]} - ${cars[1]} - ${cars[2]}`);

const carName = "Prido";
const carModel = 74;
const carColor = "white";

function carStart(kelid) {

}
console.log(carName);
const myCar = {
    name: 'Prido',
    model: 74,
    color: 'white',
    bimeh: {
        etebar: 10,
        takhfif: 20
    }
}
console.log(myCar.model);
const myCars = [{
        name: 'Fiat',
        model: 1998
    },
    {
        name: 'MVM',
        model: 2020
    },
    {
        name: 'BMW',
        model: 2022
    },
];
for (let index = 0; index < myCars.length; index++) {
   console.log('Loop on array: ' + myCars[index].name);    
}

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

const me = {
    fname: "usher",
    lname: "sm",
    age: 36
};


for (let x in me) {
    console.log(x+': ' +me[x]);
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(x + ': ' + numbers[x]);
}

numbers.forEach(function (value, index, array) {
    if (value == 25) {
        console.log("Your Res is Done!");
    }
});

