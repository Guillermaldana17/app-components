import React, { Component } from "react";
import ClassCode from "../codes/classCode";

class ComponentNoFuncional extends Component {
    constructor(props) {

        super(props);
        this.state = {
            mensaje: "..."
        }
    }
    render() {
        return (
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <p> Component con {this.state.mensaje} </p>
                <button className="btn-init" onClick={() => this.setState({ mensaje: "Clase" })}>
                    Saludar
                </button>
            </header>
        )
    }
}
export default ComponentNoFuncional;