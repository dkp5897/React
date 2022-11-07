// render():-
// This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM

import React, { Component } from 'react'

export default class renderMethod extends Component {
    render() {
        return (
            <>
                 <p>This is a render method</p>
            </>
        )
    }
}