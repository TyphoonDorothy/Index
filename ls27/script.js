// function Cube(a){
//     let V = a ** 3
//     return V
// }
// let b = +prompt('a=')
// console.log(Cube(b));

// let i = 0
// do{
//     console.log(i);
//     i++
// } while(i <= 10)

// let a = 0
// while (a <= 10){
//     console.log(a);
//     a++
// }

// for(let x = 0; x <= 10; x++){
//     console.log(x);
// }


// let i = 0
// do{
//     console.log(i);
//     i+=2
// } while(i <= 10)

// let a = 0
// while(a <= 10){
//     console.log(a);
//     a+=2
// }

// for(let x = 0; x <= 10; x+=2){
//     console.log(x);
// }

// let a = 0
// do{
//     a++
//     console.log(a, '♪┌|∵|┘♪');
// } while(a <= 10)

// let a = 100
// let Count = 0
// do{
//     if (a%3 == 0){
//         Count++
//         a++
//     } else{
//         a++
//     }
// } while(a <= 999)
// console.log(Count);



// let a = 10
// let sum = 0
// while(a < 100){
//     if(a%5 == 0){
//         sum = sum + a
//     }
//     a++
// }
// console.log(sum);


// let a = 10
// let mult = 1
// while(a < 100){
//     if(a%7 == 0){
//         mult = mult * a
//     }
//     a++
// }
// console.log(mult);

// let k = +prompt('K=')
// let n = +prompt('n=')
// do{
//     console.log(k);
//     n--
// } while(n > 0)

// let a = +prompt('a=')
// let b = +prompt('b=')
// let k = a
// let sum = 0
// do{
//     sum = k**2 + sum
//     k++
// } while(k <= b)
// console.log(sum); 

let a = +prompt('a=')
let NumSum = 0
let NumProd = 1
let NumNum = 0
let num = ''
while (a >= 1){
    NumSum += a%10
    NumProd *= a%10
    NumNum++
    num += a%10
    a = (a - a%10)/10
}
console.log(`NumSum=${NumSum} NumProd=${NumProd} NumNum=${NumNum} num=${+num}`);