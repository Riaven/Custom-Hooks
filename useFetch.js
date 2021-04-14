import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    // de esta manera podemos controlar si es que el componente no está
    // montado no ejecute el setState
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data : null,
        loading : true,
        error: null
    });

    // para que no exista un problema cuando se resuelva el estado cuando
    // el componente se encuentre desmontado
    useEffect(() => {

        return () =>{
            isMounted.current = false;
        };
    }, [])

    useEffect(() => {

        setState ( {
            data : null,
            loading : true,
            error: null
        } );

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ){
                    setState( {
                        loading: false,
                        error: null,
                        data
                    } );
                    
                }

            } )
            .catch( () => {
                setState( {...state, error : 'No se pudo rescatar la información'} );
            });
        
    }, [url])

    return state;
}
