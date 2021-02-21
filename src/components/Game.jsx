import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Game.css'
import Card from './Card'
import Animal from '../Animal'
/* eslint-disable */
export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = this.getInitialState()
    }

    getInitialState = () => ({
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
    })

    resetState = () => {
        this.setState(this.getInitialState());
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
                }, 100)
            }
        )
    }

    checkWinner(newState) {

        if (!newState.player.length) {
            alert("computer wins");
            this.resetState()
            return
        }
        if (!newState.computer.length) {

            alert("player wins");
            this.resetState()
            return
        }
        this.setState(newState)
    }


    // eslint-disable-next-line class-methods-use-this
    compare() {
        const { playersTurn } = this.state
        // eslint-disable-next-line react/destructuring-assignment
        const currentPlayer = this.state.player[0]
        // eslint-disable-next-line react/destructuring-assignment
        const currentComputer = this.state.computer[0]


        // if i greater
        const newState = { ...this.state }
        if (currentPlayer[this.state.selectedProperty] > currentComputer[this.state.selectedProperty]) {
            this.setState({ playersTurn: true })

            // put current card back
            newState.player.splice(0, 1)
            newState.player.push(currentPlayer)

            // remove card from computer
            newState.computer.splice(0, 1)

            // add card to player
            newState.player.push(currentComputer)




        } else {
            this.setState({ playersTurn: false })
            // put current card back
            newState.computer.splice(0, 1)
            newState.computer.push(currentPlayer)

            // remove card from player
            newState.player.splice(0, 1)
            // add card to computer
            newState.computer.push(currentComputer)


        }
        this.checkWinner(newState)



        // if make current winners card to back
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
