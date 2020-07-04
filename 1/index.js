/**
 * Задача. Создайте переменную str и присвойте ей значение 'abcde'.
 * Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
 */

const str = 'abcde';
console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

/**
 * Задача. Напишите скрипт, который считает количество секунд в часе.
 */
 const secondsInMinute = 60;
 const minutesInHour = 60;
 const secondsInHour = secondsInMinute * minutesInHour;
 console.log(secondsInHour);
/**`
 *Задача. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
 * Количество строк кода при этом не должно измениться. Код для переделки:
 * 
let num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
 */

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);
