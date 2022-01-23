alert('if4')
let A4 = +prompt('a=')
let B4 = +prompt('b=')
let C4 = +prompt('c=')
if (A4 > 0 && B4 > 0 && C4 > 0){
    alert('3')
} else if (A4 > 0 && B4 <= 0 || B4 > 0 && A4 <= 0 || A4 > 0 && C4 <= 0 || C4 > 0 && A4 <= 0 || B4 > 0 && C4 <= 0 || C4 > 0 && B4 <= 0){
    alert('2')
} else if (A4 <= 0 && B4 <= 0 && C4 <= 0){
    alert('0')
} else {
    alert('1')
}

alert('if8')
let a8 = +prompt('a=')
let b8 = +prompt('b=')
if (a8 > b8){
    alert(`${a8} ${b8}`)
} else{
    alert(`${b8} ${a8}`)
}

alert('if10')
let A10 = +prompt('a=')
let B10 = +prompt('b=')
if (A10 == B10){
    A10 = 0
    B10 = 0
    alert(`a=${A10} b=${B10}`)
} else {
    A10 = A10 + B10
    B10 = A10
    alert(`a=${A10} b=${B10}`)
}

alert('if16')
let a16 = +prompt('a=')
let b16 = +prompt('b=')
let c16 = +prompt('c=')
if (a16 < b16 < c16){
    a16 = 2 * a16
    b16 = 2 * b16
    c16 = 2 * c16
    alert(`a1=${a16} b2=${b16} c2=${c16}`)
} else {
    a16 = -a16
    b16 = -b16 
    c16 = -c16
    alert(`a1=${a16} b1=${b16} c1=${c16}`)
}

alert('if25')
let x25 = +prompt('x=')
if (x25 < -2 || x25 > 2){
    x251 = x25 * 2
    alert(`f(x)=${x251}`)
} else {
    x251 = -3 * x25
    alert(`f(x)=${x251}`)
}