
import React from 'react'
import ReactDOM from 'react-dom'


function name(user) {
    if (user) {
        return <h1>dsfsdfdf</h1>
    } else {
        return <h1>llllllll</h1>
    }
}

const element = <h1>prueba {name(user)} </h1>
const container = document.getElementById('root')

ReactDOM.render(element, container)



