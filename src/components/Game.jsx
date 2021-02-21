import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Game.css'
import Card from './Card'
import Animal from '../Animal'

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playersTurn: true,
            player: [
                // eslint-disable-next-line prettier/prettier
                new Animal(
                    'Elefant',
                    'placeholder.png',
                    3.3,
                    6000,
                    70,
                    1,
                    40
                ),
                new Animal(
                    'Flusspferd',
                    'placeholder.png',
                    1.5,
                    1800,
                    50,
                    1,
                    30
                ),
            ],
            computer: [
                // eslint-disable-next-line prettier/prettier
                new Animal(
                    'Nashorn',
                    'placeholder.png',
                    1.9,
                    2300,
                    50,
                    1,
                    50),
                new Animal(
                    'Krokodil',
                    'placeholder.png',
                    5.2,
                    1000,
                    70,
                    60,
                    29
                ),
            ],
            selectedProperty: '',
            computerUncovered: false,
        }
    }

    onSelectProperty() {
        return (property) => this.play(property)
    }

    play(property) {
        this.setState(
            (prevState) => ({
                ...prevState,
                selectedProperty: property,
                computerUncovered: true,
            }),
            () => {
                setTimeout(() => {
                    this.compare(property)
                }, 3000)
            }
        )
    }

    // eslint-disable-next-line class-methods-use-this
    compare() {
        console.log('compare now')
    }

    render() {
        const {
            playersTurn,
            player,
            computer,
            selectedProperty,
            computerUncovered,
        } = this.state
        const { title } = this.props

        return (
            <>
                <h1>{title}</h1>
                <div className="info">
                    {playersTurn ? 'Du bist ' : 'Der Computer ist '}
                    an der Reihe
                </div>
                <div className="cards">
                    <Card
                        animal={player[0]}
                        uncovered={playersTurn}
                        selectedProperty={selectedProperty}
                        onSelectProperty={this.onSelectProperty()}
                    />
                    <Card
                        animal={computer[0]}
                        uncovered={computerUncovered}
                        selectedProperty={selectedProperty}
                    />
                </div>
            </>
        )
    }
}
Game.defaultProps = {
    title: 'Supertrumpf',
}

Game.propTypes = {
    title: PropTypes.string,
}
