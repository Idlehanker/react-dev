import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Timeline/Header'

import go from './mousemove'

export const load = () => {
    ReactDOM.render(
        <Header title="Orange header"/>, document.getElementById('demo1'))
    go()
}

try {
    load()
} catch (e) {
    alert(e)
}