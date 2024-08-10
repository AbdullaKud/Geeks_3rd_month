//GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^[A-Za-z0-9]+@gmail.com$/i
gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    }else{
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
}

//MOVE BLOCK


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let moveX = 0

const moveBlock = () => {
    if(moveX < 449){
        moveX++
        childBlock.style.left = `${moveX}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock();

