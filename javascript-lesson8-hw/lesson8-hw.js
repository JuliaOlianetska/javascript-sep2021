/*
- Напишіть код,  котрий :
-- отримує текст з параграфа з id "content"
-- отримує текст з блоку з id "rules"
-- замініть текст параграфа з id 'content' на будь-який інший
-- замініть текст параграфа з id 'rules' на будь-який інший
-- змініть кожному елементу колір фону на червоний
-- змініть кожному елементу колір тексту на синій
-- отримати весь список класів елемента з id=rules і вивести їх в console.log
*/

let idContent = document.getElementById('content');
console.log(idContent);
idContent.innerText = 'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla'
idContent.style.background = 'red';
idContent.style.color = 'blue';

let idRules = document.getElementById('rules');
console.log(idRules);
idRules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, repellat!'
idRules.style.background = 'red';
idRules.style.color = 'blue'
console.log(idRules.classList);

/*
-- поміняти колір тексту у всіх елементів fc_rules на червоний
*/

let classFcRules = document.getElementsByClassName('fc_rules');
console.log(classFcRules);
for (const classFcRule of classFcRules) {
    console.log(classFcRule);
    classFcRule.style.color = 'red';
}
