import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const ThemeContext = createContext()

// Criação do Provedor para o Contexto
export function ThemeProvider(props) {

    // State que irá controlar qual Tema a aplicação está usando
    const [theme, setTheme] = useState('dark')

    // Função responsável por Trocar o Tema
    function changeTheme(themeRecieved) {

        if(themeRecieved !== theme) {

            setTheme(themeRecieved)

        }

    }

    return(

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <ThemeContext.Provider value={{theme, changeTheme}}>
            { props.children }
        </ThemeContext.Provider>

    )

}

export function useTheme() {

    const context = useContext(ThemeContext)

    return context

}