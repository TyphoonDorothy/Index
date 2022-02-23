// function Sum(a, b){
//     return a + b
// }



// let a = +prompt('a=')
// let b = +prompt('b=')
// console.log(Sum(a, b))

// const Mult = (a,b) => a*b
// let a = +prompt('a=')
// let b = +prompt('b=')
// console.log(Mult(a,b));


const CircleC = r => 2*Math.PI*r
let R = document.querySelector('.radius')
let btnC = document.querySelector('.btn-c')
let res1 = document.querySelector('.res1')
btnC.addEventListener('click', () => res1.value = CircleC(R.value))

const CircleS = r => Math.PI*r**2
let btnS = document.querySelector('.btn-s')
btnS.addEventListener('click', () => res1.value = CircleS(R.value))


const TriangleS = (a,b) => (a*b)/2
let a = document.querySelector('.a')
let b = document.querySelector('.b')
let res2 = document.querySelector('.res2')
let btnts = document.querySelector('.btn-t-s')
btnts.addEventListener('click', () => res2.value = TriangleS(a.value, b.value))

const Trianglec = (a,b) => Math.sqrt(a**2 + b**2)
let btntc = document.querySelector('.btn-t-c')
btntc.addEventListener('click', () => res2.value = Trianglec(a.value, b.value))




// let num = [4, 5, 6, 7, 8]
// num.push(9)
// console.log(num);
// num.pop
// console.log(num);
// num.unshift(3)
// console.log(num);
// num.shift
// console.log(num);
// num.splice(1, 3, 5, 8, 10)
// console.log(num);
// num.splice(3, 0, 0.1)
// console.log(num);
// num.splice(2, 2)
// console.log(num);


// let str = ['i', 'like', 'watch', 'tv']
// console.log(str);
// str.splice(2, 2, 'cartoons')
// console.log(str);
// let str1 = str.slice(0, 2)
// console.log(str1);
// str1.push('cats')


let fruit = ['apple', 'banana', 'grape', 'lime', 'lemon', 'pineapple']
console.log(fruit);
// fruit.forEach((item, i, fruit) => {
//     console.log(`
//         index - ${1}
//         value : ${item}
//         item lenght : ${item.length}
//     `)
// })



let number = [-5, 5, 86, 0, -12, 45, -7, -9, 3, 1, 6]
// let Neg = []
// console.log(number);
// for(let i = 0; i < number.length; i++){
//     if (number[i] < 0){
//         Neg.push(number[i])
//     }
// }
// console.log(Neg);


// let neg1 = number.filter((number) => {
//     return number < 0
// })
// console.log(neg1);


// let numberPow2 = []
// for(let num of number){
//     numberPow2.push(num**2)
// }
// console.log(numberPow2);

// let numberPOw = number.map((number) => {
//     return number**2
// })
// console.log(numberPOw);


let fruitLen = fruit.map((fruit) => {
    return fruit.length
})
console.log(fruitLen);