import { useState, useEffect } from "react"

export function DecimaTerceiraAula() {

    const [contador, setContador] = useState(0);
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    
    function adicionar() {
        setContador(contador + 1)
    }

    useEffect(
        () => {
            console.log(userName);
            if(userName.length > 10){
                setUserNameError(true)
            }
            else{
                setUserNameError(false)
            }
        }, [userName]
    )

    return(
        <>
            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
            { userNameError ? <small>O campo Nome contêm mais do que 10 caracteres</small> : null}
            <p>O valor do Contador é {contador}</p>
            <button onClick={()=>adicionar()} >Atualizar contador</button>
        </>
    )
}