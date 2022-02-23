// alert('proc32')
// function DegToRad(d){
//     let R = d / (180 / Math.PI)
//     return R
// }

// let a32 = +prompt('a=')
// let b32 = +prompt('b=')
// let c32 = +prompt('c=')
// let d32 = +prompt('d=')
// let e32 = +prompt('e=')
// alert(`${DegToRad(a32).toFixed(0)} ${DegToRad(b32).toFixed(0)} ${DegToRad(c32).toFixed(0)} ${DegToRad(d32).toFixed(0)} ${DegToRad(e32).toFixed(0)}`)


// alert('proc23')
// function Quarter(x, y){
//     if (x > 0 && y > 0){
//         return 'I'
//     } else if (x < 0 && y > 0){
//         return 'II'
//     } else if (x < 0 && y < 0){
//         return 'III'
//     } else if (x > 0 && y < 0){
//         return 'IV'
//     } else if (x == 0){
//         return 'Ox'
//     } else{
//         return 'Oy'
//     }
// }

// let x123 = +prompt('x1')
// let y123 = +prompt('y1=')
// let x223 = +prompt('x2')
// let y223 = +prompt('y2=')
// let x323 = +prompt('x3')
// let y323 = +prompt('y3=')
// alert(`${Quarter(x123, y123)} ${Quarter(x223, y223)} ${Quarter(x323, y323)}`)


// alert('proc16')
// function Sign(x){
//     if (x > 0){
//         let x = 1
//         return x
//     } else if (x == 0){
//         let x = 0
//         return x
//     } else{
//         let x = -1
//         return x
//     }
// }
// let a16 = +prompt('a=')
// let b16 = +prompt('b=')
// let sum = Sign(a) + Sign(b)
// alert(sum)


alert('proc3')
function AMean(a, b){
    return (a + b)/2
}
function GMean(a, b){
    return Math.sqrt(a * b)
}
function Mean(a, b){
    AMean(a, b)
    GMean(a, b)
    return
}

let a3 = +prompt('a=')
let b3 = +prompt('b=')
alert(Mean(a3, b3))