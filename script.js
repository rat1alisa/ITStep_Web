

/*let age = prompt('Enter your age, please');

if((age > 0) && (age < 16)){
    alert("You are kid");
}
if((age >= 16) && (age < 21)){
    alert("You are teenager");
}
if((age >= 21) && (age < 70)){
    alert("You are adult");
}
if (age>= 70){
    alert("Else");
}*/

//------------------
/*let fruit = prompt('Enter name of fruit')
switch(fruit){

    case 'cucumber':
        alert(fruit + " is vegetable");
        break;

    case 'orange':
        alert(fruit + " is fruit");
        break;
    
    default:
        alert("I don't know, what is it");
        break;
}*/

//-------------------------------------------------Типы данных

//1 - bool
/*let v = true; //false
let b = new Boolean(true);
console.log(b);

//2 - number
let num = 4;
let numb = new Number(4);

console.log(parseInt('10')); //конвертор строки в число, но, если не получается ('ppsffh15b') - NaN (not a number)
                                                                                                //infinity

//3 - undefind
let m; //значение - undefind
console.log(typeof m); //узнать тип переменной

//4 - string
let s = 'Hi, how are you?'; //"", '', `` - тут можно вставлять переменные
let g = `Hi, how are you? ${num}`; //в версии с '': '...' + num 
console.log(g);

console.log(s.length); // .length - узнать длину

console.log(NaN == NaN); // false

//5 - NULL

//6 - object

//7 - symbol

//-------------------------------------------------Операторы циклов

//1 - while
/*let counter = 2;

while(counter >= 0){ //вывод чисел от counter до 0
    console.log(counter);
    counter--;
}
//чтобы выйти - break

//2 - do while
/*do{
    console.log(counter);
    counter--;
}while(counter >= 0)
//тут сначала делаем, а потом выполняем условие

//3 - for
/*for(let i = 0; i <=10; i++){
    console.log(i);
}*/

//4 - for in/for (тут с массивами)
/*let arr = [1, 3, 6, 9];

console.log(arr[1]);

for(index in arr){
    console.log(index);
}
//выводятся индексы 
for(index of arr){
    console.log(index); 
}*/
//выводятся значения
//arr[index] - через in вывести значения

//-------------------------------------------------Функции

//1 (способы объявления)
/*function summ(parametr1, parametr2){
    let summ = parametr1 + parametr2;

    return summ;
}
console.log(summ(2, 5));

//2 (способы объявления)

let summ = function summ(parametr1, parametr2){
    let summ = parametr1 + parametr2;

    return summ;
}
console.log(summ('Hello,', ' World'));

//3 (способы объявления) - для стрелочных функций

let summ = (parametr1, parametr2) => {return parametr1 + parametr2;} //parametr1 + parametr2; (тоже можно)
console.log(summ('Hello,', ' World'));

//рекурсивные функции (факториал, фибоначчи, построение документа)

function factorial(n){
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}
console.log(factorial(3));

//основная формула -> n! = (n — 1)! × n.

function factorial(n){
    if(n == 1){
        return n;
    }
    else{
        return factorial(n-1)*n;
    }
}
console.log(factorial(7))

//инстркменты для функций (интервалы, задержки)

setTimeout(() => {alert('Start')}, 3000); //задержка выполнения (1 параметр - фуекция, 2 параметр - задержка(в милллисек))

setInterval(() => {alert(new Date())}, 2000); //вывод через интервалы*/

//callback - функции обратного вызова (передача функций в качестве параметра для других функций)


//-------------------------------------------------Практика

/*//Ex1

function Min(a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

alert(`Min - ${Min(3, 10)}`);

//Ex2

let x = prompt('Number - ');
let n = prompt('N - ');

function xN(a, b){
    return a**b;
}

alert(`${xN(x, n)}`);

//Ex3

let a1 = +prompt('Number 1 ');
let b1 = +prompt('Number 2 ');/*

//let cha = prompt('+/-/...');

/*function carculator(a, b, c){
    switch(c){
        case'1':
            return a+b;
        case'2':
            return a-b;
        case'3':
            return a*b;
        case'4':
            return a/b;
    }
}

console.log(carculator(a1, b1, cha));

//Ex4

let numbpr = +prompt('Your number');

function Prnumb(a){
    for(let i = 2; i < a; i++) {
        if(a % i == 0){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(Prnumb(numbpr));

//Ex5

let number1 = +prompt('Number (for table)');

function Table(a){
    if(a == 1){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 2){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 3){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 4){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 5){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 6){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 7){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 8){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 9){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
    else if(a == 10){
        for(let i = 1; i <= 10; i++){
            console.log(a*i);
        }
    }
}

Table(number1);

//Ex6

let number2 = +prompt('Number(%)');
let number3 = +prompt('Number(%)');

function NN(a, b){
    return Math.floor(a / b);
}
alert(`${NN(number2, number3)}`);*/



//-------------------------------------------------Объекты

//объект - он наследуется от уже встроенного объекта
/*let o = {};
let o1 = new Object();
console.log(o);

let man = {
    //ключ: значение
    age: 15,
    //name: "Alice",
    name: {
        firstname: "Alice",
        lastname: "Alekseeva"
    },

    sayFullName: function(){
        return this.name.firstname + " " + this.name.lastname; 
        //this - указатель именно на наш объект (this - тоб что перед .) - можем заменить на имя объекта
    },
    sayAge(){
        return this.age; 
    },
    "st": 9
}

console.log(man.sayFullName());
//console.log(man.name.firstname + " " + man.name.lastname)
console.log(man.sayAge()); // === console.log(man['sayAge']());
console.log(man['st']);



let stag = prompt("Enter stag");
man.stag = stag; 
//присвоение нового свойства объекту

console.log(man);*/
//delete man.age

//изменить объект, который уже задан
/*let changeAge = function(age){
    this.age = age;
}
man.changeAge = changeAge;

man.changeAge(1);
console.log(man);*/

//-------------------------------------------------Объекты 2.0
//функции-конструкторы (создание объектов с похожими значениями)
//2


/*function Student(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        return this.name;
    }
}

const student1 = new Student("Alice", 15);
const student2 = new Student("Evgen", 16);

student1.rating = 10;

student1.getRating() = function(){
    return this.rating;
}

console.log(student1.sayName());
console.log(student1.getRating());*/

//3 (class)

/*class Group{
    //конструктор для инициализации переменных
    constructor(numberOfStudents, numberOfClass){
        this.numberOfStudents = numberOfStudents;
        this.numberOfClass = numberOfClass;
    }

    getStudentsNumber(){
        return `This griup contain ${this.numberOfStudents} students.`;
    }

    getClass(){
        return `This group occupied ${this.numberOfClass} room.`;
    }
}

const group = new Group(13, 402);
//console.log(group);

console.log(group.getClass());
console.log(group.getStudentsNumber());*/


//-------------------------------------------------Практика

//Ex1

/*function Rectangle(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

const rect = new Rectangle(2, 5, 5, 1);

function getInfo(rectangle){
    console.log(`
        X1 = ${rectangle.x1};
        Y1 = ${rectangle.y1};
        X2 = ${rectangle.x2};
        Y2 = ${rectangle.y2};
    `);
}*/

/*function getWidth(rectangle){
    console.log(`
        Width = ${rectangle.x2 - rectangle.x1};
    `);
}

function getWidth(rectangle){
    console.log(`
        Width = ${rectangle.x2 - rectangle.x1};
    `);
}

function getHeight(rectangle){
    console.log(`
        Height = ${rectangle.y1 - rectangle.y2};
    `);
}

function getS(rectangle){
    console.log(`
        S = ${(rectangle.x2 - rectangle.x1)*(rectangle.y1 - rectangle.y2)};
    `);
}

function getP(rectangle){
    console.log(`
        P = ${((rectangle.x2 - rectangle.x1)+(rectangle.y1 - rectangle.y2))*2};
    `);
}


function newWidth(rectangle){
    let nw = +prompt("Enter new width (width + n)");
    console.log(`
        New width = ${(rectangle.x2 - rectangle.x1)+nw};
    `);
}

function newHeight(rectangle){
    let nh = +prompt("Enter new height (height + n)");
    console.log(`
        New height = ${(rectangle.y1 - rectangle.y2)+nh};
    `);
}

function newAll(rectangle){
    let newx = +prompt("Change x");
    let newy = +prompt("Change y");
    console.log(`
        New width = ${(rectangle.y1 - rectangle.y2)+newx};
        New height = ${(rectangle.y1 - rectangle.y2)+newy};
    `);
}

function moveX(rectangle){
    let sx = +prompt("X move");
    console.log(`
        First coordinate = (${rectangle.x1 + sx},${rectangle.y1});
        Second coordinate = (${rectangle.x2 + sx},${rectangle.y2});
    `)
}

function moveY(rectangle){
    let sy = +prompt("Y move");
    console.log(`
        First coordinate = (${rectangle.x1},${rectangle.y1 + sy});
        Second coordinate = (${rectangle.x2},${rectangle.y2 + sy});
    `)
}

function moveXY(rectangle){
    let movex = +prompt("X move");
    let movey = +prompt("Y move");
    console.log(`
        First coordinate = (${rectangle.x1 + movex},${rectangle.y1 + movey});
        Second coordinate = (${rectangle.x2 + movex},${rectangle.y2 + movey});
    `)
}

function IsInRect(rectangle){
    let px = +prompt("X:");
    let py = +prompt("Y:");

    if(((px > rectangle.x1) && (px < rectangle.x2) && (py > rectangle.y2) && (py < rectangle.y1))){
        console.log("Is inside");
    }
    else{
        console.log("Is not inside");
    }
}
//------

getInfo(rect);
getWidth(rect);
getHeight(rect);
getS(rect);
getP(rect);
newWidth(rect);
newHeight(rect);
newAll(rect);
moveX(rect);
moveY(rect);
moveXY(rect);
IsInRect(rect);*/


//-------------------------------------------------Массивы

/*let arr = []; //new Array();
//let counts = [1, '3', {name:"Alice"}]; - так не надо!!!!
let counts = [1, 2, 3, 4];
let strings = ['1', '2', '3']; 

//добавление (в конец)
//1
counts[4] = 5;

//2
strings.push('Apple');

//обращение по индексам (нулевой, первый, второй ...)

console.log(counts.length); //длина массива (вернее, индекс последнего элемента)

//first
console.log(counts[0]);

//last element
console.log(counts.pop);
console.log(counts[counts.length - 1]);

//извлечение из начала
console.log(counts.shift);

//добавление в начало
console.log(counts.unshift[0]);

//удаление элемента

strings.slice(2, 1, 'Changed'); //2 - индекс элемента, 1 - берем 1 элемент, changed - на что заменяем

console.log(counts.slice(0, 2)); //возвращает первые 2 элемента

let newArr = strings.concat(counts);//склейка двух(2) массивов




//forEach - для каждого элемента
strings.forEach(function(value, index, strings){
    //console.log(`Number - ${value}`);
    
});
//прицепили к каждому элементу функцию(добавили слово Number), но это не модифицирует массив

//map - возвращает new arr
let result = strings.map(function(value, index, strings){
    return value += " - Number";
});

console.log(result);

//filter - выбрать конкретные элементы по условию
let filter = counts.filter(function(item){
    if(item > 2){
        return true;
    }
    else{
        return false;
    }
});

console.log(counts);
console.log(filter);*/

//-------------------------------------------------Строки

/*let str = 'This is string'; //new String()
//1 - доступ к символам
console.log(`Third element - ${str[3]}`);

//2 - длина
console.log(`Length - ${str.length}`);

//3 - деление на массив
console.log(str.split(' ')); //массив слов (разграничение по пробелу)
let arr = str.split(' ');

arr[0] = 'That was'; //сделали масств из строки и изменили его

console.log(arr.join(' ')); // снова сделали строку (из массива)

//4 - replace
//сократить написанное
let replased = str.replace("This", "That was"); //что заменить, на что заменить





//-------------------------------------------------17/11/2023

function generate(){

    let number = Math.floor(Math.random() * 100);
    
    //!------------------путь к искомому объекту(h2)
    let html = document.children[0] //html
    console.dir(html);

    let body = html.children[1]; // body
    console.dir(body);

    let task = body.children[0]; //task
    console.dir(task);

    let block = task.children[0];
    console.dir(block);

    let h2 = block.children[1];
    console.dir(h2);

    h2.innerHTML = number;

    console.log(h2.style); //чтобы изменять стили объекта
    //h2.style.fontSize = "20px";


    //-------------------------------------------------
    console.dir(h2.nextElementSibling); //button

    let task1 = document.getElementsByClassName("task");
    console.log(task1);
    //возвращает массив(коллекцию)

    document.getElementsByTagName("h2"); //исчет с тегом h2

    //-------------------------------------------------
    let b = document.querySelector(".block h2"); //выбирает первый элемент, подходящий под правило
    console.log(b);

    let all = document.querySelectorAll(".block h2"); //выбирает все элементы, подходящий под правило
    console.log(all);

    //console.log(h2.innerHTML); // значение - 23


    //location - 1
    location.href ="https://google.com";
    window.location.reload();

    //history - 2
    //navigator.languages.forEach((item) => console.log(item));
    //функция вывода языков, установленных в системе

    //navigator - 3
    //screen - 4
    //document - 5


}*/

//-------------------------------------------------19/11/2023 - DOM

/*<ul class="list-unstyled list-inline" id="menu">
    <li>
        <a href="https://google.com" targert="_blank">
            Google
        </a>
    </li>
    <li>
        Facebook
    </li>
    <li>
        Twitter
    </li>
    <li>
        <a href="https://linkedin.com" target="_blank">
        <img src="" alt="linkedIn">
        </a>
    </li>
</ul>*/

//строим дерево тегов-------------------------------------

class HTMLTag{//этот класс характеризует любой тег 
    constructor(name){
        this.name = name;
        this.id = ""; //он может быть или не быть - поэтому в скобки не добавляем (но создадим setor - для установления значения, если он присутствует)
        this.classes = []; //как массив, ведь кдассов у объекта может быть несколько

        this.children = [];
        this.attributes = []; //массив, ведь их может быть много

        this.text = '';
    }

    setId(id){
        this.id = id;
    }
    
    setText(text){
        this.text = text;
    }

    addClass(className){
        this.classes.push(className); //добавляем в конец массивов массив
    }

    addAttribute(attribute){
        this.attributes.push(attribute);
    }

    addChild(tag){
        this.children.push(tag);
    }



    render(){//выводит сам себя
        /*<ul class="list-unstyled list-inline" id="menu"> </ul> - так должен выглядеть при выводе*/ 

        let res = `<${this.name} class="${this.classes.join(' ')}" id="${this.id}" ${this.renderAttributes()}>${this.text}`;

        if(this.children.length > 0){
            this.children.forEach((child) => {
                res += '\t' + child.render();
            })
        }
        res += `</${this.name}>`

        return res;
    }

    renderAttributes(){
        let attributes = "";

        this.attributes.forEach((attr) => {
            attributes += `${attr.name}="${attr.value}"`;
        });
        return attributes;
    }
} 

class HTMLAttr{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }

}

let ul = new HTMLTag("ul"); //создали объект
//console.dir(ul);
ul.setId("menu");
//console.log(ul.id);
ul.addClass("list-unstyled");
ul.addClass("list-inline");
//console.dir(ul);
//ul.render();
//все, перевели а объект, с которым можно работать

//у нас 4 тэга li => создаем + остальные объекты
let li1 = new HTMLTag("li");
//
let a1 = new HTMLTag("a");
//теперь атрибуты для тега a1
let href = new HTMLAttr("href", "https://google.com");
let target = new HTMLAttr("target", "_blank");
a1.addAttribute(href);
a1.addAttribute(target);
a1.renderAttributes();
a1.setText("Google");
//
li1.addChild(a1);
//
ul.addChild(li1);

let li2 = new HTMLTag("li");
//
li2.setText("Facebook");
ul.addChild(li2);

let li3 = new HTMLTag("li");
//
li3.setText("Twitter");
ul.addChild(li3);

let li4 = new HTMLTag("li");
//
let a2 = new HTMLTag("a");
//теперь атрибуты для тега a2
href = new HTMLAttr("href", "https://linkedin.com");
target = new HTMLAttr("target", "_blank");
a2.addAttribute(href);
a2.addAttribute(target);
//

let img = new HTMLTag("img");
let src = new HTMLAttr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX9+vUKZsL//fb//Pb///cAZMEAXL8AYsEAXsA9eccAXcC9z+bH2OkAWr8od8hDf8rD0+fx9PNxl9Bajc7k6/AKacOivN7X4eyauN1hjc3P2+oAVr7r8fIlbsTF0OVjldG1yeNxltGMrtmqweDU4Ox3oNWFqtgYcsbe5+58pddNhctektB1o9a9yuM/g8y+0ucAUbwASrtUBuyvAAAJXklEQVR4nO2ci3aiOhRAITkhEQ1IBbEoan2ivdPO/f+fuycJWnWqdaatj7lnr1kKNEQ2CXkznkcQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxB3BOfsYfu2r/ASQFO0PaaX8bh3Za6bPIBh5d6rIEy38c9ATuPa1/hmsqc8S9EV0t4bBhQx5zcFRBnAi+797zvk/Zja3hkLJk9n1s4Y8KSzJ3uVyb7qapOzoSTN7zuB3FXlqz6vMeRvDYD1ZLOU3GrLWT6mUCqvdq+VJrPFocUwRolBJ1W8evQXHfqyn8bf0k7nk2jDsYW5JOicUP29oHngh9wxhpezBY+U0NEy+Cn7bEHomXrljKDvmYeBJdjyjfoch96yBHxbfY/jwZhiObRxwIhG/JQ0vZ6im1zGEhfl1kR0rLb/OsM6lgwvnUsyma63CEyXNlxn66jolDVaH40k3ORrzFxr6QWOyyr63tnjPEI/DQb/F9HQ2ufaEoe0RvXeu6Qe9Z4i/fVjjCyGF+GZDzDkGvLZ6g2NXZzgs6mTdM6zDgtnh4M2G3e648HZaRBwGeGzaSuAdQ2E7EOF2S/oiEOvOOtPyOw1h6pdlmT0DT0pDBsnKV1orfzSAA0No2SClxHIf0lUpA2w/qGy1zeMwGIkQj4X+nHcPDUVU5UhT+GJttqqVLscJx/TOn/U3GrJuIDCrYDmXYJZBklKJOkflbM+QVTaAwD4OZ72+qnOXUKKo0/s1rHOhUOVKHho2ANupLJe+fDRbMIldtx43e+F3Gtp7bQxtMZ69bIsC2cCS9s0QE9lVnXPMliN312ufIHdJrHYeKbt5YGh0nKEJ3n1rIMNcXszQ3ykKNHptDTl37uoZS5O5K/51ppQ9Z4n3YnMHduM4ZejtVMG8sol/GUNMEV0/+nIEW0PgI+USNuHQthGpSZoMejbdwi6GXCh3lg6FrlPzpCEmXV1qYZD4coay0U4rd7Ei2zHcHMKsxZbmmGrap2lsI23gE+YyrhrNGNTiHxiyhS/Lpt122fQihmKZYIasn4v+1rA11a4EwZ4kL8y2fMb7b6q+SNhIYdNwsakCM5vtThrCSptyy3Uh7WVcxFDZwSBW2MJND7gzlP+450S1YNtcmTctr2t7C36ALTxNYtp4YfJLbXFgyD0bJ/YaTZAfwaUMw7atzitbFm4NfVcLiLEtBJ9tAsvAIeqks6b47eLllf7IsHIP9twGGV7M0LXBeZrtG7qPyPaT3+v/qAl7sTfox8YwMeecMmQttSnOLmuY83cMRV1T2PtdG4pd/sSwfUuG4evaWmmTTWFkn7hlY4dlD6yhXGwM849y6XcaAt9ypmHQrqtklW67DXOTnRMTr/2uy/uybqi43asY+uLVtoAtFT/TsOnKRqwt8bbkfRNNljJzj2AwN/WLB+PAXTDDG8hcNXklQ98MKTrCJZxtyGP3KK6wjnxx1XOKFSKkUVDOsKXKvTr2aFql7ZFrSl/J8A2M8VxDxirXTAnGwApbRYhwPp3OcVPonmdGfOoOQqh1UJe2d2WIj5/rx/opY5Ngkxtcsfpzij3nZLnbgRcftWluz5CzuvKPGfbtdufLhF7Ydknuv1WUMi6vUluIfaR5Ds1BtTY9YIlbQW1od/rG0Gxo2wPO3fl6BRyaSrkuoBAh9vndDEwaaXsQw6wHJgb1tGdoxnUqa2i2tjW+2fkSQz6LXg7oABvH+B3/g4YvdqtyhnYnwp7SswkXtWxzuhvbs6ICi04+jX0VYDcpehupw56GOahkYwyJCRkvdgyXLdOM7eJzG7fNVs/l8LXdmXxFy3sz1rTLryNRfDcod324bS8O3sJgjTAwI1bp3twcmIOtyg5o1fG+jUTZZqza29rfubkZUjuceDhWbg4eDldebIb0WvwPDH8pxI8Zxndq6EGkxBlI/duTB7cCTx7iM1iP7zUJkbMund9rClr4GVz7GgmCIAjiL4Fq1Y/gcNvtKt4KReczicjySfOm28bYTZOdTyQCT5X6Ob7lVPysoRmpl8+3nIifT8Mw7P/VaXiPz+HeWFm9Y2uU7Yf9Zpu1S8yODvL64NuZ/O3Mq3JoyKBqmxV69ro4DFrD1gC8JEm4/WB5McAN887SsJWYeQmDZ785VMPhrHYErxgOK+D2r1flwBBmL9KMWa9skngrEepQLFIlMEwsloOG6k/bSk6nmdKh3wNYiSxTMw6xiNK11IGMKjcSXiqNMXtLP0qum4r7hjDuSzOTKMJGwnmyVEJJGQaxMGEiuVxKiYZalCEGkqLfhXlfCj0zMxmZMLOPQgo0gpE2y0ZDtSzlTRnyqi/kqJhNS6HmAB0lRC/Pp6X0TZiGELJc9Yp24AuxKFprKZZePlw7QyHUy3jWRU9M2S4KzmdVe40x3JQhdKSamDncHGVSM6vUAs4hzURtGCcA0AxEmQMWMJnQFYMH6Qzl3MMzp0p2wMM71AXGgeNduCVDPhCYKnaWZS7VuKfkyq3E6ipnqM1sE2sGbgmQcSsYPNWGWcrdDFwHClUvg2KVvi3DQtlFsnbhtVyMZNB2fxno2tAUlIeGD/uGGRp2w80CE/BvzlBs3t3sPzxLN/eLdVrfGsrMzuqeTkNrqFTXxQnxTZU0fKZEVGxIMQ1dc4zP9O8ZjgO3MA3DqNtKwyQTorLzy7MWwDR0b7R4sJInDN/JpbmqFwmh600YPm+mcfFqRcMUl+kyiNJBILBkBaPq/14ampJ1bYqsPLuJ2sKXfce/bU8KEc57o1CEHQ96Wqio11trecrwnTTklanwF71n8/rE9Q37ckO/DdVSmfUwUncSu9wHWzihCldBaNo0yneGfe0MR0HfpGHYR8NICWcogjV48Oorc6ZeRVc35Pnjw9OD+/c44yyZxJlYPtavBbYeSpF1Wsnj0wQbqU8PtjdRPD7ZP7Pe02POzWfFAf84sG+hPTyZBcUsXcTlsjNm1y9p9tZicPteD3YHWN3jY2B2GLfrJ+pFFOaM7SoMvvncLNhwQT1s8ngmGsyujdv7HwP2unR/1r+DdWHv3KAh1Pym+8d/CE9/ar+zWGDDW/rpzSXhF4B9FLeSU+ro6Guad046na+j6GU+Tv5SQbP8y7ZpTv3HDPfP1cegCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOIo/wFQxcsDQYLG+wAAAABJRU5ErkJggg==")
let alt = new HTMLAttr("alt", "LinkedIn");
let style = new HTMLAttr("style", "width: 200px");

img.addAttribute(src);
img.addAttribute(alt);
img.addAttribute(style);
//
a2.addChild(img);
li4.addChild(a2);

ul.addChild(li4);

ul.render();

let w = document.getElementById("wrapper");
w.innerHTML = ul.render();


//УРААААААА, Теперь оно формирует наш html документ


//атрибуты (атрибут - имя и значение) (но мы заранее не знаем все атрибуты)


//обЪект EVENT

