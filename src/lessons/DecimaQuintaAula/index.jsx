import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [buttonCadastra, setbuttonCadastra] = useState(false)
    const [erro, setErro] = useState(false)
    const [cep, setCep] = useState('')

    function insertCep(cepRecieved){
        setCep(cepRecieved)
        if(cepRecieved.length === 8){
            setbuttonCadastra(true)
        }
        else{
            setbuttonCadastra(false)
        }
    }

    function searchCep(event) {
        event.preventDefault();
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(
            response => {
                response.json().then(
                    address => 
                    {
                        if(address.erro !== undefined){
                            setbuttonCadastra(false)
                            setErro(true)
                        }
                        else{
                            setErro(false)
                            setLocations([...locations, address])
                        }
                    }
                )
            }
        )
    }

    function deleteLocation(currentLocation) {
        console.log(currentLocation);
        setLocations(locations.filter(location=> location.cep !== currentLocation.cep))
    }

    return(

        <div className="decima-quarta-aula-component">

            <form className={(erro)?"error":null}>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => insertCep(event.target.value)}
                    />
                </div>

                <button onClick={(event) => searchCep(event)} disabled={!buttonCadastra}>Cadastrar</button>

                {
                    (erro)?<small>Não foi possivel encontrar uma localização com este numero de cep!</small>: null
                }

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => (
                            <DecimaQuintaAulaItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation=>deleteLocation(currentLocation)}
                            /> 
                        )
                    )
                }

            </section>

        </div>

    )

}