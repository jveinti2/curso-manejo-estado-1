import React from "react";
import { Loading } from './Loading.js'

const SECURITY_CODE = 'paradigma'


class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false,
            value: ''
        }

    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (!!this.state.loading) {
            setTimeout(() => {
                console.log('iniciando validación');
                if(SECURITY_CODE === this.state.value ){
                    this.setState({ error: false, loading: false })
                } else {                    
                    this.setState({ error: true, loading: false })
                }


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
                {(this.state.error && !this.state.loading ) && <p>Error: el código es erroneo</p>}
                {this.state.loading && <Loading />}
                <input 
                placeholder="esto es un código"
                value={this.state.value}
                onChange={(event) => {
                    this.setState({value: event.target.value})
                }}
                />
                <button
                    onClick={() =>
                        this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }