/**
 * Задача. Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
 */
let hello = ['Привет, ', 'мир', '!'];
console.log(hello.join(''));
/**
 *  Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'.
 *  Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.
 */

let helloWord = hello.join('');
console.log(helloWord);
/**
 * Дан массив ['Привет, ', 'мир', '!'].
 * Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, '),
 * а затем вывести на экран содержимое этой переменной..
 */
hello[0] = 'Пока, ';
console.log(hello.join(''));
/**
 * Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
 * Этот объект дан:
 * const obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
 */
const obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
console.log(obj['Коля']);
console.log(obj['Петя']);

/**
 * Создайте массив arr с элементами 1, 2, 3, 4, 5
 */
let arr = [1, 2, 3, 4, 5];
console.log(arr);
/**
 * Дан объект arr:
const arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

Выведите с его помощью слово 'голубой'.
 */
const obj2 = {
	'ru': ['голубой', 'красный', 'зеленый'],
	'en': ['blue', 'red', 'green'],
};
console.log(obj2.ru[0]);
console.log(obj2['ru'][0]);
