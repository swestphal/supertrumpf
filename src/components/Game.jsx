import React, { Component } from 'react'

import './Game.css'
import Card from './Card'
import Animal from '../Animal'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const playersTurn = true
        const player = [
            new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40),
        ]
        const computer = [
            new Animal('Nashorn', 'placeholder.png', 1.9, 2300, 50, 1, 50),
        ]

        return (
            <>
                <div className="info">
                    {playersTurn ? 'Du bist ' : 'Der Computer ist '}
                    an der Reihe
                </div>
                <div className="cards">
                    <Card animal={player[0]} uncovered={playersTurn} />
                    <Card animal={computer[0]} uncovered={!playersTurn} />
                </div>
            </>
        )
    }
}
