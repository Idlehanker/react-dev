import React from 'react'
import App3 from './App3'

import {Provider} from 'react-redux'
import {configureStore} from '../redux/configreStore';

const Root = (props) => {
    const store = configureStore()

    return (
        <Provider store={store}>
            <App3 />
        </Provider>
    )
}

export default Root