module.exports = function toReadable(number) {
    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  
    let words = "";
  
    // Вычленяем сотни и оставляем остаток в number
    if (number >= 100) {
      words += hundreds[Math.floor(number / 100)];
      number %= 100;
      if (number > 0) {
        words += " ";
      }
    }
  
    // Если в number числа от 10 до 19
    if (number >= 11 && number <= 19) {
      words += teens[number - 11];
    } else {
      // Если в number есть десятки
      if (Math.floor(number / 10) > 0) {
        words += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
          words += " ";
        }
      }
      // Если в number есть единицы
      if (number > 0) {
        words += units[number];
      } else if (words === "") { // если words всё ещё пустое, значит это число 10 или 0
        if (number === 10) {
          words = tens[1]; // Обработка числа 10 отдельно
        } else if (words === "") {
          words = units[0]; // Обработка числа 0
        }
      }
    }
  
    return words.trim();
  }
  