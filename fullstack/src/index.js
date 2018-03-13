import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Timeline/Header'

export const load = () => {
    ReactDOM.render(
        <Header title="Orange header"/>, document.getElementById('demo1'))
}

try {
    load()
} catch (e) {
    alert(e)
}