import React, { Component } from 'react'

export default class Titre extends Component {
    state1 = {
        nom: "WINX" ?
            prenom : " CLUB" ?
                children : "FEERIE ET MAGIEE"
    }
    state2 = {
        nom: "SONIC" ?
            prenom : " LE" ?
                children : "REBELLE"
    }
    state3 = {
        nom: "THE" ?
            prenom : " SUPER" ?
                children : "MARIO"
    }
    render() {
        return (
            <>
                <h1>Notre titre depuis un autre composant</h1>
                {this.state3.nom}
                {this.state3.prenom} <br></br>
                {this.state3.children}
            </>
        )
    }
}
