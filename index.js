let todos = [
    {
        id: '1sdffdfwe2543241',
        title: 'buy milk',
        description: 'description will be here'
    },
    {
        id: '1sadasd2543241',
        title: 'chek h w',
        description: 'description will be here'
    },
    {
        id: '1sdasdasd241',
        title: 'todo h/t',
        description: 'description will be here'
    }
]
let temp = []
let temp_id
let empties = document.querySelectorAll('.empty')
let contents = document.querySelectorAll('.cont')
let modal = document.querySelector('.modal')
let closeBtns = document.querySelectorAll('.modal_close')
let openBtns = document.querySelectorAll('.header span')

openBtns.forEach(el => el.onclick = () => modalToggle())

closeBtns.forEach(el => el.onclick = () => modalToggle())

for (empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.className = 'item'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    event.preventDefault()
    this.className += ' hovered'
}


function dragLeave() {
    this.className = 'empty'
}

function dragDrop(params) {
    this.className = 'empty'
    temp.forEach((item, index) => {
        if (item.id === temp_id) {
            this.lastElementChild.append(item)
        }
    })
}

function modalToggle() {
    modal.classList.contains('modal_act') ? modal.classList.remove('modal_act') : modal.classList.add('modal_act')
}

reload(todos)
function reload(arr) {
    contents[0].innerHTML = ''
    temp = []
    for (let todo of arr) {
        let cont_item = document.createElement('div')
        let title = document.createElement('h3')
        let descr = document.createElement('p')

        cont_item.classList.add('item')
        title.classList.add('title')
        descr.classList.add('descr')

        cont_item.id = todo.id
        cont_item.draggable = true
        title.innerHTML = todo.title
        descr.innerHTML = todo.description

        cont_item.append(title, descr)
        contents[0].append(cont_item)

        temp.push(cont_item)

        cont_item.addEventListener('dragstart', dragStart)
        cont_item.addEventListener('dragend', dragEnd)
    }
}