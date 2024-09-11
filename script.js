
// Задача 1
console.log("Задача 1");
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}

console.log(`Сумма равна ${sum}`);


// Задача 2
console.log("\nЗадача 2");
const getRandomInRange = (min = 2, max = 30) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
const num = BigInt(getRandomInRange());
let factorial = 1n;
for (let j = 2n; j <= num; j += 1n) {
  factorial *= j;
}

console.log(`Факториал ${num} равен ${factorial}`);


// Задача 3
console.log("\nЗадача 3");
const bicyclePrice = 60000;
const giftMom = 1000;
let giftDad = 1000;
let age = 0;
let tempGiftedMoney = 0;
while (tempGiftedMoney < bicyclePrice) {
  if (age <= 10) tempGiftedMoney += giftMom + giftDad;
  else {
    giftDad += 1200;
    tempGiftedMoney += giftMom + giftDad;
  }

  age += 1;
}
console.log(age - 1);


// Задача 4
console.log("\nЗадача 4");
function isPalindrome(word) {
  let isWordPalindrome = true;
  word = word.toLowerCase();
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      isWordPalindrome = false;
      break;
    }
    return isWordPalindrome;
  }
}
const word1 = "Огород";
const word2 = "Шалаш";
isPalindrome(word1)
  ? console.log(`"Слово ${word1} является палиндромом"`)
  : console.log(`"Слово ${word1} не является палиндромом"`);
isPalindrome(word2)
  ? console.log(`"Слово ${word2} является палиндромом"`)
  : console.log(`"Слово ${word2} не является палиндромом"`);


// Задача 5
const randomNumber = getRandomInRange(0, 100);
let inputNumber = -1;
let attempt = 10;

do {
  inputNumber = prompt(
    `Введите целое число от 0 до 100. Осталось попыток: ${attempt}`
  );
  if (inputNumber == undefined) {
    break;
  } else if (isNaN(Number(inputNumber))) {
    alert("Введены некорректные данные.");
  } else {
    inputNumber = Number(inputNumber);

    if (inputNumber === randomNumber) {
      alert("Вы выиграли!");
    } else if (
      randomNumber - 5 < inputNumber &&
      inputNumber < randomNumber + 5
    ) {
      alert("Горячо");
    } else if (
      randomNumber - 10 < inputNumber &&
      inputNumber < randomNumber + 10
    ) {
      alert("Тепло");
    } else {
      alert("Холодно");
    }
    attempt--;
  }
} while (randomNumber !== inputNumber && attempt > 0);
if (attempt == 0) {
  alert("Попытки закончились. Вы проиграли.");
}
