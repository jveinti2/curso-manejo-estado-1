import React from "react";
import { Loading } from './Loading.js'


class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: true,
            loading: false,
        }

    }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // UNSAFE_componentWillMount() {
    //     console.log('UNSAFE_componentWillMount');
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (!!this.state.loading) {
            setTimeout(() => {
                console.log('iniciando validación');
                this.setState({ loading: false })
                console.log('terminando validación');
            }, 3000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}
                </h2>
                <p>Porfavor escribe el código se seguridad</p>
                {this.state.error && <p>Error: el código es erroneo</p>}
                {this.state.loading && <Loading />}
                <input placeholder="esto es un código" />
                <button
                    onClick={() =>
                        this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }