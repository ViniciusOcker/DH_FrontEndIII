import { useEffect } from "react";
import { useState } from "react"

export function DecimaMesaDeTrabalho(){
    const [pedidos, setPedidos] = useState(null);
    const [pedido, setPedido] = useState(null);
    const [tamanho, setTamanho] = useState('');
    const [sabor, setSabor] = useState('');

    function cancelar() {
        alert("O pedido foi cancelado!");
        setPedido(null);
        setPedidos(null);
    }

    function perdir(event) {
        event.preventDefault();
        setPedido({
            tamanho: tamanho,
            sabor: sabor
        });
        setTamanho('');
        setSabor('');
    }

    useEffect(()=>{
        setTimeout(()=>{
            setPedidos(pedido);
        },2000)
    },[pedido]);

    return(<>
            <form onSubmit={event => perdir(event)}>
                <label htmlFor="tamanho">Tamanho</label>
                <input type='text' name='tamanho' id='tamanho' value={tamanho} onChange={event=>setTamanho(event.target.value)} />
                <label htmlFor="sabor">Sabor</label>
                <input type="text" name='sabor' id='sabor' value={sabor} onChange={event=>setSabor(event.target.value)}/>
                <button>Pedir pizza</button>
            </form>
            <h1>Seus Pedidos:</h1>
            {
                (pedidos != null)?
                <div>
                    <p>{pedidos.tamanho}</p>
                    <p>{pedidos.sabor}</p>
                    <button onClick={()=>cancelar()}>Cancelar pedido</button>
                </div>
                :
                null
            }
    </>)
}