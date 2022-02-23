function power(x, n){
    return x**n
}
alert(power(3,5))

let x = +prompt('a=')
let n = + prompt('b=')
alert(power(x, n))

function add(a, b){
    return a + b
}
function multiply(a, b){
    return a * b
}
console.log(add(multiply(36325, 9824), 777))

function solver(a, b, c, d, e){
    let x = (a**2 + 5*b*c + d/3 + e).toFixed(2)
    if(isNaN(x)){
        return 'error'
    } else{
        return x
    }
}

console.log(solver(1, 2, 3, 4, 5));
console.log(solver(1, 2, 'text', 4, 5));

function CalcAvg (a, b, c){
    returt (a + b + c) / 3
}

console.log(CalcAvg(1, 2, 3));

function form(name, num){
    if (num >= 1 && num <= 4){
        return `${n} is in elementary school`
    } else if (num >= 5 && num <= 9){
        return `${n} is in secondary school`
    } else if (num >= 1 && num <= 12){
        return `${n} is in high school`
    } else {
        return `erro`
    }
}

let n = prompt('your name')
let a = +prompt('your form')
console.log(form(a))


function RootsCount(a, b, c){
    let D = b**2 - 4*a*c
    if (D == 0){
        return '1 root'
    } else if (D < 0){
        return '2 roots'
    } else{
        return 'no roots'
    }
}

console.log(RootsCount(9, -1, 0))
console.log(RootsCount(21, 21, 21))
console.log(RootsCount(1, 2, 1))


function Calc(a, b, Op){
    if (Op == 1){
        return a - b
    } else if (Op == 2){
        return a * b
    } else if (Op == 3){
        return a / b
    } else{
        return a + b
    }
}
let a = +prompt('a')
let b = +prompt('b')
let Op = +prompt('Op')
console.log(Calc(a, b, Op));

function RadToDeg(R){
    let d = R *180/Math.PI
    return d
}
let a = +prompt('R')
alert(RadToDeg(a))