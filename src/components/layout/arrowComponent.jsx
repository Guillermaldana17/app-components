import React, { useState } from "react";

const ArrowComponent = ({ logo }) => {
    const [mensaje, setMensaje] = useState();

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> Component con {mensaje} </p>
            <button className="btn-init" onClick={() => setMensaje("arrow function")}>
                Saludar
            </button>
        </header>
    );
}

export default ArrowComponent;