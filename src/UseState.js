import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    })

    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(false)
    // const [value, setValue] = React.useState('')

    console.log(state.value)

    React.useEffect(() => {
        console.log('Iniciando el efecto');

        if (!!state.loading) {
            setTimeout(() => {
                console.log('Haciendo la validación');
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false
                    })
                    // setLoading(false)
                    // setError(false)
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false
                    })
                    // setError(true)
                    // setLoading(false)
                }
                console.log('Terminando la valdiación');
            }, 3000);
        }

        console.log('Terminando el efecto');
    }, [state.loading])

    return (
        <div>
            <h2>Eliminar {name}
            </h2>
            <p>Porfavor escribe el código se seguridad</p>
            {(state.error && !state.loading) && <p>Error: el código es incorrecto</p>}
            {state.loading && <p>Cargando...</p>}
            <input
                placeholder="esto es un código"
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value    
                    })
                    // setError(false)
                    // setValue(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    setState({
                        ...state,
                        loading: true    
                    })
                    // setLoading(true)
                    //setError(false) La forma más acorde//
                }}
            >Comprobar</button>
        </div>
    )
}

export { UseState }