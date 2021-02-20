import React, { Component } from 'react'
import Animal from './Animal'
import Card from './components/Card'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const elephant = new Animal(
            'Elefant',
            'placeholder.png',
            3.3,
            6000,
            70,
            1,
            40
        )

        return (
            <div className="App">
                <Card animal={elephant} uncovered />
            </div>
        )
    }
}

export default App
