/*
1) Напишіть код, який :
a) додає клас з назвою групи, елементу з ід main_header
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
*/

let idMain = document.getElementById('main_header');
console.log(idMain);
idMain.classList.add('sep-2021')

    let ul = document.getElementsByTagName('ul');
console.log(ul);
for (const ulElement of ul) {
    ulElement.style.width = '400px'
}
let classLinkList = document.getElementsByClassName('linkList');
for (const classLinkListElement of classLinkList) {
    classLinkListElement.style.width = '50%';
    console.log(classLinkListElement);
}

/*
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
*/
let classListEl2 = document.getElementsByClassName('listElement2');
console.log(classListEl2);
for (const classListEl2Element of classListEl2) {
    console.log(classListEl2Element.innerText);
}

let liEls = document.getElementsByTagName('li');
for (const liElsElement of liEls) {
    liElsElement.style.background = 'grey';
}

/*
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
*/

let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {

    aElement.classList.add('anchor');
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px'
    }
    aElement.classList.add(`element_${aElement.innerText}`)
    console.log(aElement)
}
/*
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
*/

let subHeaderEls = document.getElementsByClassName('sub-header');
for (const subHeaderElsElement of subHeaderEls) {
    subHeaderElsElement.style.background = prompt(`enter color of ${subHeaderElsElement.innerText}`)
    if (subHeaderElsElement.innerText === 'content 2 segment') {
        subHeaderElsElement.style.color = prompt('enter text color')
    }
}

/*
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
*/

let classContent1 = document.getElementsByClassName('content_1');
for (const classContent1Element of classContent1) {
    classContent1Element.innerText = prompt('enter your text')
}

let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
    console.log(pElement)
}

let text2Elements = document.getElementsByClassName('text2');
for (const text2Element of text2Elements) {
    text2Element.innerText = 'sep-2021'
}


