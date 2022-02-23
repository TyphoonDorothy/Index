// let div = document.createElement('div')
// div.className = 'message'
// div.innerHTML = 'hello world from js'
// div.style.background = 'whitesmoke'
// div.style.marginTop = '15px'

// document.body.append(div)

// div.insertAdjacentHTML('beforebegin', 'before')
// div.insertAdjacentHTML('afterbegin', 'hi!')

// let cont = document.createElement('div')
// cont.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda modi quisquam temporibus nemo facere! Sunt unde ipsa quaerat quis, sit assumenda provident temporibus. Id officia quasi alias laudantium est!'
// cont.style.width = '500px'
// cont.style.backgroundColor = '#F5F5DC'
// cont.style.border = '5px dotted orange'
// cont.style.padding = '20px'
// cont.style.marginTop = '10px'
// cont.style.fontSize = '20px'

// document.body.prepend(cont)


// let list = document.querySelector('.ol')
// list.before('before')
// list.after('after')

// let li1 = document.createElement('li')
// li1.innerHTML = 'prepend'
// list.prepend(li1)


// let li2 = document.createElement('li')
// li1.innerHTML = 'append'
// list.append(li2)

// let word = document.querySelectorAll('li')
// console.log(word);
// word.forEach(element => {
//     element.innerHTML = 'apple'
// });
// console.log(word);


// div.insertAdjacentElement('beforeend', list)


let inputWidth = document.querySelector('.width')
let inputHeight = document.querySelector('.height')
let inputColor = document.querySelector('.color')
let inputStep = document.querySelector('.step')
let create = document.querySelector('.create')
let clear = document.querySelector ('.clear')

create.addEventListener('click', createDiv)

let newDiv, iWidth, iHeight, iColor, iStep
function createDiv(){
    iWidth = +inputWidth.value
    iHeight = +inputHeight.value
    iColor = inputColor.value
    iStep = +inputStep.value
    newDiv = document.createElement('div')
    newDiv.className = 'newDiv'
    newDiv.style.height = iHeight + 'px'
    newDiv.style.width = iWidth + 'px'
    newDiv.style.background = iColor
    divExist = Boolean(document.querySelector('.newDiv'))
    if (divExist == false){
        if (iWidth >= 50 && iWidth <= 500 && iHeight >= 50 && iHeight <= 500){
            document.querySelector('.container').prepend(newDiv)
        } else{
            alert('size not allowed!')
        }
    } else{
        alert('object already exist!s')
    }
}

let up = document.querySelector('.up')
let down = document.querySelector('.down')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let mLeft = 0
let mTop = 0

right.addEventListener('click', moveRight)

function moveRight(){
    if (mLeft + iWidth < 1000){
        mLeft += iStep
        newDiv.style.marginLeft = mLeft + 'px'
    } else{
        alert(`you've reached the border!`)
    }

}



down.addEventListener('click', moveDown)

function moveDown(){
    if (mTop + iHeight < 1000){
        mTop += iStep
        newDiv.style.marginTop = mTop + 'px'
    } else{
        alert(`you've reached the border!`)
    }
}

up.addEventListener('click', moveUp)

function moveUp(){
    if (mTop > 0){
        mTop -= iStep
        newDiv.style.marginTop = mTop + 'px'
    } else{
        alert(`you've reached the border!`)
    }
}


left.addEventListener('click', moveLeft)

function moveLeft(){
    if (mLeft > 0){
        mLeft -= iStep
        newDiv.style.marginLeft = mLeft + 'px'
    } else{
        alert(`you've reached the border!`)
    }
}

clear.addEventListener('click', clearDiv)
function clearDiv(){
    let tree = document.querySelector('.container')
    tree.removeChild(newDiv)
}
