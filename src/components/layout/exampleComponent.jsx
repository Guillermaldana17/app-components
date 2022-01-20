import React from "react";

class ClassHelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Hello, World</h1>;
    }
}

const FunctionHelloWorld = function (props) {
    return <h1>Hello, World</h1>;
};

const ArrowHelloWorld = (props) => <h1>Hello, World</h1>;

export default FunctionHelloWorld;