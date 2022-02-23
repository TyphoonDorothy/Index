// let n = +prompt('n=')
// switch (n){
//     case 3{
//         console.log(4);
//         break
//     }
//     case 4{
//         console.log('hello');
//         break
//     }
//     case 5{
//         console.log('js');
//         break
//     }
//     default{
//         console.log(10);
//     }
// }

// let n = +prompt('n=')
// switch(n){
//     case 1:
//         console.log('monday');
//         break
//     case 2:
//         console.log('tuesday');
//         break
//     case 3:
//         console.log('wednesday');
//         break
//     case 4:
//         console.log('thursday');
//         break
//     case 5:
//         console.log('friday');
//         break
//     case 6:
//         console.log('saturday');
//         break
//     case 7:
//         console.log('sunday');
//         break
//     default:
//         console.log('not a day');
// }


// let n = +prompt('n=')
// switch(n){
//     case 1, 2, 12:
//         console.log('winter');
//         break
//     case 3, 4, 5:
//         console.log('spring');
//         break
//     case 6, 7, 8:
//         console.log('summer');
//         break
//     case 9, 10, 11:
//         console.log('fall');
//         break
//     default:
//         console.log('not a month');
//         break
// }


// let a = +prompt('l=')
// let n = +prompt('n')
// switch (n){
//     case 1:
//         console.log(a/10);
//         break
//     case 2:
//         console.log(a * 10**3);
//         break
//     case 3:
//         console.log(a);
//         break
//     case 4:
//         console.log(a/10**3);
//         break
//     case 5:
//         console.log(a/100);
//         break
// }


// let n = +prompt('n=')
// let num = []
// let a = 1

// for(let i = 0; i < n; i++){
//     num.push(a)
//     a += 2
// }
// alert (num)

// let n = +prompt('n=')
// let a = +prompt('a=')
// let d = +prompt('d=')
// let G = []

// for(let i = 0; i < n; i++){
//     G.push(a.toFixed(2))
//     a = a * d
// }
// console.log(G);


// let num =[]
// let n = +prompt('n=')
// let k = 0
// for (let i = 0; i < n; i++){
//     let a = +prompt('a=')
//     num.push(a)
// }
// for (let i = 0; i < n; i++){
//     if(num[i]%2 == 1){
//         console.log(num[i]);
//         k++
//     }
// }
// console.log('count -' k);


// let A = []
// let n = +prompt('n=')

// for (let i = 0; i < n; i++){
//         let a = +prompt('a=')
//         A.push(a)
// }

// console.log('парні індекси');
// for (let i = 0; i < n; i++){
//     if(i%2 == 0){
//         console.log(A[i]);
//     }
// }

// console.log('непарні індекси')
// for (let i = 0; i < n; i++){
//     if(i%2 == 1){
//         console.log(A[i]);
//     }
// }


// let A = []
// let n = 10
// for (let i = 0; i < n; i++){
//     let a = +prompt('a=')
//      A.push(a)
// }
// console.log(A)
// let i = 0
// while (A[i] >= A[9]){
//     i++
// }
// if (i < 9){
//     console.log(A[i]);
// } else{
//     console.log(0);
// }


// let num = []
// let n = +prompt('n=')
// let k = +prompt('k=')
// let l = +prompt('l=')
// let sum = 0

// for (let i = 0; i < n; i++){
//         let a = +prompt('a=')
//          num.push(a)
// }
// console.log(num);

// for (let i = k; i <= l; i++){
//     sum += num[i]
// }

// console.log(sum);


let num = []
let n = +prompt('n=')
let k = +prompt('k=')
let l = +prompt('l=')
let sum = 0

for (let i = 0; i < n; i++){
        let a = +prompt('a=')
         num.push(a)
}
console.log(num);

for (let i = 0; i < n; i++){
    if (i < k || i > l){
        sum += num[i]
    }
}

console.log(sum);
