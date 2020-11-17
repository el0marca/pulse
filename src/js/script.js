"use strict";

// let car = {
//     color: "green",
//     maxSpeed: 250,
//     cost: 1000000,
//     audio: {
//         brand: "Sony",
//         speakers: 12,
//     }
// };

// car.cost = 4544432;
// if (car.cost >= 1000000) {
//     console.log("Auto is expensive");
// } else if (car.cost < 1000000) {
//     console.log("Auto is cheap");
// } else {
//     console.log("Cost is unknown")
// };

// car.color == "green" ? console.log("Зеленый") : console.log("Красный");
// car.cost > "1000000" ? console.log("expensive") : console.log("cheap");

// let car = {
//     color: "green",
//     maxSpeed: 250,
// };
// let car2 = {
//     color: "red"
// };

// colorChange(car);
// colorChange(car2);
// speedChange(car);
// // console.log("Car speed was: " + car.maxSpeed);

// function colorChange(theCar) {
//     theCar.color = "yellow";
// };

// function speedChange(carSpeed) {
//     carSpeed.maxSpeedNow = "300";
//     console.log("Car speed was:" + car.maxSpeed);
//     console.log("Car speed now: " + car.maxSpeedNow);
// }

// console.log("Car:" + car.color);
// console.log("Car2:" + car2.color);

// let car = {
//     maxSpeed: 240,
//     update: speedChange,
// };

// car.update();

// function speedChange() {
//     console.log(car.maxSpeed);
// }

// function watch(message) {
//     return message + " - Xiaomai";
// };
// let message = watch("простое слово");
// console.log(message);

// function look(seen) {
//     return seen + " - lenovo"
// };
// let seen = look("смотри здесь");
// console.log(seen);

// myColors();

// function myColors(color = "red") {
//     if (color == "red") {
//         return;
//     }
//     color = "green";
//     console.log(color);
// };

// color("yellow");

// function color(firstParametr = "red") {
//     if (firstParametr == "red") {
//         return;
//     }
//     console.log(firstParametr);
// };

// let arr = ["fdf.png", 4, "hdfgs", "kjkvx"];
// console.log(arr[1]);

// const answer = +prompt("Вам есть 18?","18");

// console.log(typeof(answer))


// const answers = [prompt("Как ваше имя", ""), prompt("Как ваша фамилия", "")];

// answers[0] = prompt("Как ваше имя", "");
// answers[1] = prompt("Сколько вам лет?", "");
// answers[2] = prompt("Как ваша фамилия", "");

// document.write(answers);

// const category = `toys`;
// console.log(`https://someurl.com/${category}/5/ggfd/gdxf/bcbxg/${category}`)

// const user = `Ivan`
// alert(`Привет, ${user}`) 

// let incr = 10,
// decr = 10;
// incr++;
// decr--;

// console.log(incr)
// console.log(decr)

// const isChecked = true,
//     isClosed = false;
// console.log(isChecked || isClosed)
// const num = 20;
// (num ===19) ? console.log("NO") : console.log("yes");

// switch (num) {
//     case 43:
//         console.log("reed");
//         break;
//     case 20:
//         console.log("yees");
//         break;
// }

// const number = 21;
// const string = "word";
// let num = 54;
// console.log(number)

// const person = `alex`
// console.log(person) 
// const bool = false; 
// console.log(bool)
// let und;
// console.log(und);

// const obj = {
//     name: "Alex",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name)
// let arr = ["apple.jpg", "orange.jpg", "gfd.png", {}, []];
// console.log(arr[1]) 

// alert("Jeel pad");

// const result = confirm ("are you here");
// console.log(result)

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя", "");
// answers[1] = prompt("Как ваша фамилия", ""); 
// answers[2] = prompt("Сколько вам лет", "");

// console.log(typeof(answers));

// const category = "toys"
// console.log(`https://fdgs.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}, ${category}`)

// let incr = 10
// let decr = 10

// incr++;
// decr--;

// console.log(++incr, --decr);

// console.log(5%2)

// console.log(2*4 === +`8`);

// const isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose)

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
//     console.log(numberOfFilms)

//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
//     {numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");}
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function showMyDB (hidden){
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов", ""),
//             b = prompt("На сколько оцените его", "");
//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {  
//             console.log("error")
//             i--;
//         }
//     }
// }

// rememberMyFilms()

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено мало фильмов");}
//         else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
//             console.log("Вы классический зритель");}
//         else if (personalMovieDB.count >=30) {
//                 console.log("Вы киноман");}   
// }

// detectPersonalLevel()

// function writeYourGenres() {
//     for(let i=1; i<=3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// writeYourGenres();
// if (num < 49) {
//     console.log("error");
// } else if (num < 58) {
//     console.log("error1");
// } else if (num < 69) {
//     console.log("error2");}

// (num == 50) ? console.log("ok") : console.log("error")

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log("Error");
//         break;
//     case 65:
//         console.log("Erorrrr");
//         break;
//     case 50:
//         console.log("errddffdsfsbs");
//         break;
//     default:
//         console.log("In the next time");
//         break;
// }   
// while (num<=55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num<54);
// let num = 50;

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage("Hello world")
// showFirstMessage("heyhey")

// function calc(a,b){
//     return (a+b)
// };
// function call(a,b)
// {return(a*b)
// }
// console.log(calc(4,8))

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum)

// function first() {
//     setTimeout(function () {
//         console.log(1)
//     }, 500)
// }

// function second() {
//     console.log(2)
// }
// first();
// second();

// function learnJS(lang, callback, learnd, htm, css, bootstrap) 
// {
//     console.log(`Я учу ${lang}`); 
//     callback();
//     learnd();
//     console.log(`Я уже учил ${htm}`);
//     css();
//     bootstrap();
// }

// function bop(){console.log(`And you`)}
// learnJS(`JavaScript`, 
// function() {console.log(`Я прошел этот урок`);}, 
// function() {console.log(`Я выучил JS`);},
// `html разметку`,
// function(){console.log(`Я также проходил CSS`);}, bop
// )

// const options = {
//     name: `test`,
//     width: 1024,
//     height: 1024,
//     colors: { 
//         border: "black", 
//         bg: "red",
//     }};
// const {border, bg} = options.colors;
// console.log(border)
  
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }

// const arr = [0,1,2,3,4,5,6,]
// arr[9]=9;
// arr[8]=8;
// arr[7]=7;
// console.log(arr.length);
// console.log(arr);

// const str = prompt("", "");
// const products = str.split(";");
// console.log(products);
// console.log(products.join(" - "))

// function log (a,b,c,d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// };
// const num = [2,5,7,"bgdfvdxsbv"];

// log(...num);
// let num = 4.6;
// console.log(-4/"h")

// const persone = `Alex`;

// const bool = false;

// console.log(something);

// let und;
// console.log(und)
// //объекты
//const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name) 

// //массивы
// let arr = ['plum.png', 'get.png', 'tt.jpg',6,7];
// console.log(arr[4]);

// alert('Hello')
// const result = confirm('Are you sure?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '');
// console.log(typeof(answer));

// const answers = [];
// answers[0] =  prompt('Как ваше имя?', '')
// answers[1] =  prompt('Как ваша фамилия?', '')
// answers[2] =  +prompt('Сколько вам лет?', '')
// console.log(`Привет ${answers}`)
// confirm(`Да? ${answers}`)
// const isChecked = true,
//       isClose = false;
// console.log(isChecked&&!isClose) 
// console.log(2+2*2)

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i=0; i<2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = +prompt('На сколько оцените его?','');
// if (a!=null && b!=null && a!='' && b!='' && a.length<=50 ){
//     personalMovieDB.movies[a] = b;}
// else {
//     i-- }};
// let i=0;
// while (i<2) {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = +prompt('На сколько оцените его?','');
// personalMovieDB.movies[a] = b;
// i++;}

// let i=0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = +prompt('На сколько оцените его?','');
//           personalMovieDB.movies[a] = b;
//           i++;}
// while (i<2);

// let i=0;
// while(i<2){
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = +prompt('На сколько оцените его?','');
//           personalMovieDB.movies[a] = b;
//           i++;}

// if (personalMovieDB.count<10) 
// {console.log('Просмотрено довольно мало фильмов')}
// else if (personalMovieDB.count<30) 
// {console.log('Вы классический зритель')}
// else if (personalMovieDB.count>=30) 
// {console.log('Вы киноман')}
// else {console.log('Произошла ошибка')}

// console.log(personalMovieDB)

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num>100) {console.log('Too much');
// } else {console.log('okay')}

// const loading = 12;
// (loading==12) ? console.log("yes") : console.log("error")

// switch(num) {
//     case 51: 
//     console.log('Неверно');
//     break;
//     case 10: 
//     console.log('Error')
//     break;
//     default: console.log("Ok")
// }
// let num = 50;
// while (num<=55){
//     console.log(num);
//     num++;
// }
// do{
//     console.log(num);
//     num++;
// }
// while (num<55)
// for(let i=1;i<=9;i++){
//     console.log(num);
//     num++; 
// }

// let i=5;
// do {
//     i--;
//     console.log(i)
// }
// while(i>1)

// let i = 0;
// while(i<5){i++;console.log(i)}
// for(let i=0; i<9;i++){console.log(i
    // )}
// let i = 0;
// do{i++;console.log(i)}
// while(i<3)

// let i=50;
// while(i<60){i++;console.log(i)}
