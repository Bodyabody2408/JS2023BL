// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 'folse', 'string', true, 2.7, 'one', 'two', 12, 9, 10];
console.log(arr);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
   let book1 = {
        title : 'Scrum',
        pageCount : 220,
        genre : 'science'
   }
    let book2 = {
        title : 'Brand',
        pageCount : 280,
        genre : 'science'
}
    let book3 = {
        title : 'When the breath becomes airy',
        pageCount : 320,
        genre : 'artistic'
}
console.log(book1, book2, book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title : 'Scrum',
    pageCount : 220,
    genre : 'science',
        authors: [
            {name: 'Jon'},
            {age: 55}
        ]
}
let book5 = {
    title : 'Brand',
    pageCount : 280,
    genre : 'science',
        authors: [
        {name: 'Mike'},
        {age: 47}
    ]
}
let book6 = {
    title : 'When the breath becomes airy',
    pageCount : 320,
    genre : 'artistic',
        authors: [
        {name: 'Pole'},
        {age: 45}
    ]
}
console.log(book4, book5, book6)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arruser = [
    {name:'Jon', username:'Jon11', password:11},
    {name:'Mike', username:'Mike22', password:22},
    {name:'Ron', username:'Ron33', password:33},
    {name:'Din', username:'Din44', password:44},
    {name:'Jack', username:'Jack55', password:55},
    {name:'Ross', username:'Ross66', password:66},
    {name:'Donald', username:'Donald77', password:77},
    {name:'Bohdan', username:'Bohdan88', password:88},
    {name:'Ivan', username:'Ivan99', password:99},
    {name:'Lev', username: 'Lev100', password:100},
    {name:'Vadim', username:'Vadim101', password:101}
]
arruser.forEach(user => {
    console.log(`Пароль користувача ${user.name}: ${user.password}`);
});
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 45;

    if (time > 0 && time <= 15){
        console.log('1 частина');
    }
    else if ( time > 15 && time <= 30){
    console.log('2 частина');
    }
    else if ( time > 30 && time <= 45){
        console.log('3 частина');
    }
else if ( time > 45  && time <= 60){
    console.log('4 частина');
}
    else {
    console.log('невірний час');
    }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day > 0 && day <= 10 ){
    console.log('1 декада');
}
else if ( day > 10 && day <= 20 ){
    console.log('2 декада');
}
else if ( day > 20 && day <= 31 ){
    console.log('3 декада');
}
else {
    console.log('невірна декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let week = +prompt('Enter number day of the week');
    switch (week){
        case 1:
            console.log('Планування роботи')
            break;
        case 2:
            console.log('Нарада з Пр-відділом')
            break;
        case 3:
            console.log('Проведеня тренінгів')
            break;
        case 4:
            console.log('Аналіз роботи')
            break;
        case 5:
            console.log('Заповнення звітів')
            break;
        case 6:
            console.log('Допрацювання інших робіт')
            break;
        case 7:
            console.log('Відпочинок')
            break;
        default:
            console.log('404')
    }
// - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
    let number1 = 2;
    let number2 = 10;

    if (number1 === number2){
        console.log('Числа рівні');
    }
    else if (number1 > number2){
    console.log(number1);
    }
    else {
    console.log(number2);
    }
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = null || 'default';
    console.log(x);
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (array[0].monthDuration >= 5) {
    console.log('Супер');
}
if (array[1].monthDuration >= 5) {
    console.log('Супер');
}
if (array[2].monthDuration >= 5) {
    console.log('Супер');
}
if (array[3].monthDuration >= 5) {
    console.log('Супер');
}
if (array[4].monthDuration >= 5) {
    console.log('Супер');
}
if (array[5].monthDuration >= 5) {
    console.log('Супер');
}
else {
    console.log('менше 4 місяці');
}
