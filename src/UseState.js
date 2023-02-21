import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        console.log('Iniciando el efecto');

        if (!!loading) {
            setTimeout(() => {
                console.log('Haciendo la validación');
                setLoading(false)
                console.log('Terminando la valdiación');
            }, 3000);
        }

        console.log('Terminando el efecto');
    }, [loading])

    return (
        <div>
            <h2>Eliminar {name}
            </h2>
            <p>Porfavor escribe el código se seguridad</p>
            {error && <p>Error: el código es incorrecto</p>}
            {loading && <p>Cargando...</p>}
            <input placeholder="esto es un código" />
            <button
                onClick={() => { setLoading(true) }}
            >Comprobar</button>
        </div>
    )
}

export { UseState }