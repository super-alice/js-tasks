/**
 * Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
 */
const secondsInMinute = 60;
const minutesInHour = 60;
const secondsInHour = secondsInMinute * minutesInHour;
const hourInDay = 24;
const dayInMonth = 30;
const secondsInDay = secondsInHour * hourInDay;
const secondsInMonth = secondsInDay * dayInMonth;
console.log(secondsInHour);
console.log(secondsInDay);
console.log(secondsInMonth);
/**
 * Создайте три переменные - час, минута, секунда.
 * С их помощью выведите текущее время в формате 'час:минута:секунда'.
 */
const hours = 11;
const minutes = 56;
const seconds = 55;
console.log(hours + ':' + minutes + ':' + seconds);
/**
 * Создайте переменную, присвойте ей число.Возведите это число в квадрат.Выведите его на экран.
 */
let number = 11;
console.log(number * number);
/**
 * Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=.
 * Количество строк кода при этом не должно измениться.
 */

let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

/**
 * Переделайте этот код так, чтобы в нем использовались операции++ и--.
 * Количество строк кода при этом не должно измениться.
 */

num = 10;
num ++;
num ++;
num --;
alert(num);
