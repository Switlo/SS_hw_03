`use strict`;

// Вправи до Глави 3 "Масиви"
// #1 Дражнилка
const randomBodyParts1 = ["око", "ніс", "обличчя", "тулуб", "нога", "рука"];
const randomAdjectives1 = ["крива", "втомлена", "дурна", "красива", "волохата", "буйна"];
const randomWords1 = ["гусінь", "вівця", "дубина", "мавпа", "курка", "лиса"];

// Выбор случайной части тела из массива randomBodyParts:
const randomBodyPart1 = randomBodyParts1[Math.floor(Math.random() * randomBodyParts1.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
const randomAdjective1 = randomAdjectives1[Math.floor(Math.random() * randomAdjectives1.length)];
// Выбор случайного слова из массива randomWords:
const randomWord1 = randomWords1[Math.floor(Math.random() * randomWords1.length)];

// Соединяем случайные строки в предложение:
let randomInsult1 = document.querySelector("#randomInsult1");
randomInsult1.innerHTML = `У тебе ${randomBodyPart1} немов ${randomAdjective1} ${randomWord1}!`;

// #2 Витончена дражнилка
const randomBodyParts2 = ["жарти", "думки", "погляди", "слова"];
const randomAdjectives2 = ["пласкіші", "дурнуватіші", "довші", "потворніші"];
const randomAnimalParts2 = ["мізки", "яйця", "хвіст", "вуха", "шия"];
const randomAnimals2 = ["курки", "віслюка", "крокодила", "страуса"]

const randomBodyPart2 = randomBodyParts2[Math.floor(Math.random() * randomBodyParts2.length)];
const randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
const randomAnimalPart2 = randomAnimalParts2[Math.floor(Math.random() * randomAnimalParts2.length)];
const randomAnimal2 = randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)]

let randomInsult2 = document.querySelector("#randomInsult2");
randomInsult2.innerHTML = `У тебе ${randomBodyPart2} ще ${randomAdjective2} ніж ${randomAnimalPart2} у ${randomAnimal2}!`;

// #3 Витончена дражнилка, що виводиться через масив + join()
let randomInsult3 = document.querySelector("#randomInsult3");
randomInsult3.innerHTML = [`У тебе`, randomBodyPart2, `ще`, randomAdjective2, `ніж`, randomAnimalPart2, `у`, randomAnimal2].join(" ");

// #4 Переведення масиву у рядок за допомогою join()
const array = [3, 2, 1];
let string = document.querySelector('#string');
string.innerHTML = array.join(" більше, ніж ");

// Вправи до Глави 4 "Об'єкти"
// #1 Підрахунок балів
const scores = {
    Anna: 1,
    John: 0,
    Ben: 1
}

scores[`Anna`] += 2;
scores[`John`] += 3;
scores[`Ben`] += 5;

let scoresShow = document.querySelector('#scoresShow');
scoresShow.innerHTML = JSON.stringify(scores); // лайфхак для виведення об'єкта у html !!!!
console.log(scores);

// #2 Витягнути елемент з масиву

const myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};

let objectShow = document.querySelector('#myCrazyObject');
objectShow.innerHTML = myCrazyObject["some array"][2].number;

console.log(myCrazyObject["some array"][2].number);
