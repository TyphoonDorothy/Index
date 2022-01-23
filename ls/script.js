// let a = 5
// let b = '5'
// console.log(Boolean(a === b));

// let x = +prompt('x kg')
// let a = +prompt('a UAH')
// let y = +prompt('y kg') 
// let b = a/x*y
// alert(`${y} kg cost ${b} UAH`)

// let c = +prompt('c=')
// if (c >= 10 && c <= 99) {
//     let c1 = Math.trunc(c/10)
//     let c2 = c%10
//     let sum = c1 + c2
//     let mult = c1 * c2
//     console.log(`sum= ${sum} multiply= ${mult}`);
// } else {
//     console.log('error');
// }

// let a = +prompt('number')
// console.log(Boolean(a > 0));

// let a = +prompt('a')
// let b = +prompt('b')
// console.log(Boolean(a > 0 || b < -2));

// let x = +prompt('x=')
// let y = +prompt('y=')
// if (x > 0 && y > 0) {
//     console.log('I');
// }
// else if (x < 0 && y > 0) {
//     console.log('II');
// }
// else if (x < 0 && y < 0) {
//     console.log('III');
// }
// else{
//     console.log('IV');
// }


// let res = document.querySelector('.res')

// function colorcell(){
//     let x = document.querySelector('.x')
//     let y = document.querySelector('.y')
//     if (x.value > 0 && x.value <= 8 && y.value > 0 && y.value <= 8){
//         if (x.value%2 == 0 && y.value%2 != 0 || y.value%2 == 0 && x.value%2 != 0){
//             res.value = 'white'
//         }
//         else{
//             res.value = 'black'
//         }
//     } else {
//         res.value = 'error'
//     }
// }

// let res = document.querySelector('.res')
// let x1 = document.querySelector('.x1')
// let y1 = document.querySelector('.y1')
// let x2 = document.querySelector('.x2')
// let y2 = document.querySelector('.y2')

// function move(){
//     if (Math.abs(x1.value-x2.value) == Math.abs(y1.value-y2.value)){
//         res.value = "Can"
//     } else{
//         res.value = "Cant"
//     }
// }

let res = document.querySelector('.res')
let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')

function root(){
    let d = b.value ** 2 - 4 * a.value * c.value
    if (d > 0){
        let x1 = (-b.value - d**(1/2))/(2*a.value)
        let x2 = (-b.value + d**(1/2))/(2*a.value)
        res.value = `x1= ${x1} x2=${x2}`
    } else if (d == 0){
        res.value = (-b.value)/(2*a.value)
    } else{
        res.value = "no roots"
    }
}