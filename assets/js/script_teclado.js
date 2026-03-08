document.addEventListener('keydown', (event)=>{
    const color = document.getElementById('key')
    if(event.key == 'a'){
        color.style.backgroundColor = 'pink'
    } else if(event.key == 's'){
        color.style.backgroundColor = 'orange'
    } else if(event.key == 'd'){
        color.style.backgroundColor = 'aqua'
    }
})

document.addEventListener('keydown', (event)=>{
    const color = document.getElementById('keynew')
    if(event.key == 'q'){
        color.style.backgroundColor = 'purple'
    } else if(event.key == 'w'){
        color.style.backgroundColor = 'gray'
    } else if(event.key == 'e'){
        color.style.backgroundColor = 'brown'
    }
})
