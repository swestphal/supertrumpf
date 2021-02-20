import React from 'react'

import Animal from '../Animal'
import './Card.css'

export default function Card({ animal, uncovered }) {
    const front = (
        <div className="card">
            <h1>{animal.name ? animal.name : 'Unbekannt'}</h1>
            {animal.image && (
                <img
                    alt={animal.name}
                    height="200"
                    width="200"
                    src={`${process.env.PUBLIC_URL} /${animal.image}`}
                />
            )}
            <table>
                <tbody>
                    {Object.keys(Animal.properties).map((property) => {
                        const animalProperty = Animal.properties[property]
                        return (
                            <tr key={property}>
                                <td>{animalProperty.label}:</td>
                                <td>
                                    {animal[property]}&nbsp;
                                    {animalProperty.unit}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

    const back = <div className="card back" />

    if (uncovered) {
        return front
    }
    return back
}
