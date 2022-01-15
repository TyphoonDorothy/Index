// let userName = 'Darka'
// console.log(`My name is ${userName}`);
// console.log(typeof userName);
// let a = 2345
// let aStr = String(a)
// console.log('aStr' +aStr + 'type:' +typeof a);


// console.log(-3/0 + typeof (3/0));
// console.log('text'/5 + typeof ('text'/5));

// let a = 23n
// console.log('a=' + a + ' type: ' + typeof a);

// let t = true
// console.log('t= ' + t + ' type: ' + typeof t);
// let tNum = Number(t)
// console.log('Number(t)= ' + Number(t) + ' type: ' + typeof Number(t));
// console.log('String(t)=' + String(t) + typeof String(t));
// let f = false
// console.log('f= ' + f + ' type: ' + typeof f);
// console.log('Number(f)= ' + Number(f) + ' type: ' + typeof Number(f));
// console.log('String(f)=' + String(f) + typeof String(f));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean('egvewg'));
// console.log(Boolean(' '));


// let y = null 
// console.log(y + ' type: ' + typeof y); пише, що об'єкт, але насправді ні

// let x
// console.log(typeof x);

// console.log(typeof Math);
// console.log(typeof (function(){})); насправді об'єкт
// console.log(typeof Symbol("id"))

// console.log(Number('two'));

function changeColor(){
    document.querySelector('h1').style.color = 'red'
}
function changeSize(){
    document.querySelector('h1').style.fontSize = '100px'
}
function changeBg(){
    document.querySelector('*').style.background = 'violet'
}
function addBorder(){
    document.querySelector('h1').style.border = '5px solid red'
}

let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let res = document.querySelector ('.result')
function plus(){
    a = Number(num1.value)
    b = Number(num2.value)
    res.value = a+b
}
function minus(){
    a = Number(num1.value)
    b = Number(num2.value)
    res.value = a-b
}
function multiply(){
    a = Number(num1.value)
    b = Number(num2.value)
    res.value = a*b
}
function divide(){
    a = Number(num1.value)
    b = Number(num2.value)
    res.value = a/b
}
function percent(){
    a = Number(num1.value)
    b = Number(num2.value)
    res.value = a/b * 100
}