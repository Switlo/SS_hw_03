`use strict`;

const randomBodyParts = ["око", "ніс", "череп", "тулуб", "нога", "рука"];
const randomAdjectives = ["крива", "втомлена", "дурна", "красива", "волохата", "буйна"];
const randomWords = ["комаха", "вівця", "дубина", "мавпа", "курка", "лиса"];
// Выбор случайной части тела из массива randomBodyParts:
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
let randomInsult = document.querySelector("#randomInsult");
randomInsult.innerHTML = `У тебе ${randomBodyPart} немов ${randomAdjective} ${randomWord}!`;
