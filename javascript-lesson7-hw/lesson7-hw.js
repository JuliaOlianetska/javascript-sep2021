/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 створити пустий масив, наповнити його 10 об'єктами new User(....)
 */
function UserConstructor (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [];

let user1 = new UserConstructor(1, 'Kate', 'Kovalenko', 'kovalenko@gmail.com', '0504444444');
let user2 = new UserConstructor(2, 'Maria', 'Stepanenko', 'stepanenko@gmail.com', '0503333333');
let user3 = new UserConstructor(3, 'Ann', 'Khilko', 'khilko@gmail.com', '0503333333');
let user4 = new UserConstructor(4, 'Sofia', 'Rudenko', 'rudenko@gmail.com', '0503333333');
let user5 = new UserConstructor(5, 'Natali', 'Chalepa', 'chalepa@gmail.com', '0503333333');
let user6 = new UserConstructor(6, 'Inna', 'Bondarenko', 'bondarenko@gmail.com', '0503333333');
let user7 = new UserConstructor(7, 'Mariana', 'Koval', 'koval@gmail.com', '0503333333');
let user8 = new UserConstructor(8, 'Antonina', 'Chorna', 'chorna@gmail.com', '0503333333');
let user9 = new UserConstructor(9, 'Julia', 'Hasych', 'hasych@gmail.com', '0503333333');
let user10 = new UserConstructor(10, 'Vera', 'Marianenko', 'marianenko@gmail.com', '0503333333');

usersArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(usersArray)


/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 */
let filteredUsers = usersArray.filter(value => {
    return value.id % 2 === 0
})
console.log(filteredUsers);

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
 */
let sortedUsers = usersArray.sort((a,b) => {
    return a.id - b.id
})
console.log(sortedUsers);


/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
 */
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

let clients = [];
let client1 = new Client(1, 'Julia', 'Olianetska', 'ulana_m@ukr.net', '0504449286', ['milk', 'bread', 'wisky']);
let client2 = new Client(10, 'Nastia', 'Rosova', 'bla-bla-bla', '12345678909', ['chocolate', 'milk', 'sugar', 'beer']);
let client3 = new Client(8, 'Karina', 'Dovga', 'bla-bla-bla', '12345678909', ['bread', 'juice', 'vodka']);
let client4 = new Client(4, 'Lera', 'Bondarenko', 'bla-bla-bla', '12345678909', ['juice', 'cheese', 'water', 'gin']);
let client5 = new Client(2, 'Inna', 'Koval', 'bla-bla-bla', '12345678909', ['apple', 'orange', 'wine']);
let client6 = new Client(5, 'Natali', 'Kravets', 'bla-bla-bla', '12345678909', ['milk', 'bread', 'wisky', 'pizza']);
let client7 = new Client(3, 'Maria', 'Hasych', 'bla-bla-bla', '12345678909', ['chocolate', 'milk', 'sugar', 'beer', 'oregano', 'salt']);
let client8 = new Client(7, 'Mariana', 'Delegach', 'bla-bla-bla', '12345678909', ['bread', 'juice', 'vodka']);
let client9 = new Client(6, 'Tania', 'Akreva', 'bla-bla-bla', '12345678909', ['apple', 'orange', 'wine']);
let client10 = new Client(9, 'Alla', 'Krit', 'bla-bla-bla', '12345678909', ['milk', 'bread']);
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
console.log(clients);

/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/

let sortedClients = clients.sort((a,b) => {
    return a.order.length - b.order.length
})
console.log(sortedClients);