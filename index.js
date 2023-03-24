const empties = document.querySelectorAll('.empty')
const form = document.forms.addTask

form.onsubmit = (event) => {
    event.preventDefault()
    let task = { id: Math.random() }
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    todos.push(task)
    reload(todos)
}

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

function reload(arr) {
    empties[0].innerHTML = ''
    temp = []
    for (let todo of arr) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let p = document.createElement('p')

        div.setAttribute('id', todo.id)
        div.setAttribute('class', 'fill')
        div.setAttribute('draggable', true)

        b.innerHTML = todo.title
        p.innerHTML = todo.description

        div.append(b, p)
        empties[0].append(div)

        temp.push(div)

        div.addEventListener('dragstart', dragStart)
        div.addEventListener('dragend', dragEnd)
    }
}
reload(todos)


for (empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

let temp_id

function dragStart() {
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.className = 'fill'
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
            this.append(item)
        }
    })
}
