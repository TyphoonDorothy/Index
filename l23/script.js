// alert('hello world')
// let userName = 'Darka'
// console.log ('my name is ' + userName)
// let userAge = 15
// console.log ('this user is ' + userAge + ' years old')
// let userAge = prompt('how old are you?')
// console.log ('i am ' + userAge + ' years old')
// let userName = prompt('what is your name?')
// console.log ('my name is ' + userName)
// alert(`i am ${userAge} years old`)

// let a = Number (prompt('a='))
// let b = Number (prompt('b='))
// let sum = a + b
// let dob = a * b
// let dif = a - b
// console.log(typeof(sum))
// alert(`sum=${sum} dob=${dob} dif=${dif}`)

// let sides = Number(prompt('sides'))
// let len = Number(prompt('length'))
// let P = sides * len
// console.log ('P=' + P)

// let R = Number(prompt('Radius'))
// let S = 2 * Math.PI * R
// console.log('S=',S)

// let l = Number(prompt('l'))
// let R = l / (2 * Math.PI)
// let S = Math.PI * Math.pow(R,2)
// console.log('R=',R,'S=',S)
 
// let a = Number(prompt('a'))
// let b = Number(prompt('b'))
// let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
// console.log('c=', c)

// let R1 = Number(prompt('smaller R='))
// let R2 = Number(prompt('bigger R='))
// let S = Math.PI * Math.pow(R2,2)
// let S1 = Math.PI * Math.pow(R1,2)
// let S2 = S - S1
// console.log('S=',S2)

// let a = Number(prompt('a'))
// let b = Number(prompt('b'))
// let c = Number(prompt('c'))
// let D = Math.sqrt(b * b - 4 * a * c)
// let x1 = (- b - D) / (2 * a)
// let x2 = (- b + D) / (2 * a)
// alert(`x1=${x1} x2=${x2}`)

// let x = Number(prompt('x='))
// let y = 3 * Math.pow(x,6) - 6 * Math.pow(x,2) - 7
// alert(`y=${y}`)

// let x = Number(prompt('x='))
// let y = 4 * Math.pow(x-3,6) - 7 * Math.pow(x-3,3) - 7
// alert(`y=${y}`)

let x1 = Number(prompt('x1'))
let y1 = Number(prompt('y1'))
let x2 = Number(prompt('x2'))
let y2 = Number(prompt('y2'))
let x3 = Number(prompt('x3'))
let y3 = Number(prompt('y3'))
let a = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
let b = Math.sqrt(Math.pow(x3-x2,2) + Math.pow(y3-y2,2))
let c = Math.sqrt(Math.pow(x1-x3,2) + Math.pow(y1-y3,2))
let p = (a + b + c) / 2
let S = Math.sqrt(p * (p - a) * (p - b) * (p - c))
console.log('S=',S)