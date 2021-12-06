/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

function Car (model, producer, productionYear, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = () => {
        console.log('model:', this.model, ', producer:', this.producer, ', production year:', this.productionYear, ', max speed:', this.maxSpeed, ', engine volume:', this.engineVolume)
    };
    this.increaseMaxSpeed = (newSpeed) => {
        console.log(this.maxSpeed + newSpeed)
    }
    this.changeYear = (newYear) => {
        console.log(this.productionYear = newYear)
    }
    this.addDriver = (driver) => {
        console.log(this.driver = driver)
    }
}

let car1 = new Car('Captur', 'Wtf', 2017, 240, 56)

car1.drive();
car1.info();
car1.increaseMaxSpeed(2);
car1.changeYear(1111);
car1.addDriver({name : 'Petro', age : 35, experience: '5 years'})

/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
class Car1 {
    constructor(model, producer, productionYear, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info = () => {
        console.log('model:', this.model, ', producer:', this.producer, ', production year:', this.productionYear, ', max speed:', this.maxSpeed, ', engine volume:', this.engineVolume)
    };
    increaseMaxSpeed = (newSpeed) => {
        console.log(this.maxSpeed + newSpeed)
    }
    changeYear = (newYear) => {
        console.log(this.productionYear = newYear)
    }
    addDriver = (driver) => {
        console.log(this.driver = driver)
    }
}

let car2 = new Car1('Quashqai', 'Nissan', 2021, 300, 96)

car2.drive();
car2.info();
car2.increaseMaxSpeed(1111111111111);
car2.changeYear(1111111111111111111);
car2.addDriver({name : 'Anna', age : 35, experience: '10 years'})


/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

function Popeliushka (name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize
}
let popeliushka10 = [
    new Popeliushka('Alina', 21, 36),
    new Popeliushka('Tamara', 20, 40),
    new Popeliushka('Kristina', 19, 42),
    new Popeliushka('Alica', 24, 37),
    new Popeliushka('Penelopa', 25, 37),
    new Popeliushka('Elena', 23, 35),
    new Popeliushka('Klara', 21, 39),
    new Popeliushka('Fiona', 22, 39),
    new Popeliushka('Markiza', 19, 38),
    new Popeliushka('Violetta', 24, 38),
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize
    }

    findPopeliushka(shoeSize) {
        for (const popeliushka of popeliushka10) {
            if (popeliushka.legSize === shoeSize) {
                console.log(`It's HER!!! ${popeliushka.name} ${popeliushka.age}`)
            }
        }
}
}
let prince1 = new Prince('Anatoliy', 25, 37);
prince1.findPopeliushka(prince1.shoeSize);

let findPopeliushka = popeliushka10.find(value => value.legSize === prince1.shoeSize)
console.log(findPopeliushka);