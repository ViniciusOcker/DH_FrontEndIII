import { useState } from "react"
import { createContext, useContext } from "react"

const AccessibilityContext = createContext();

export function AccessibilityProvider(props) {
    const [accessibility, setAccessibility] = useState({bigLetter: false})

    function changeAccessibility(accessibilityRecieved) {
        switch (accessibilityRecieved) {
            case 'bigLetter':
                setAccessibility(
                    {
                        bigLetter: !accessibility.bigLetter
                    }
                )
                break;
        
            default:
                console.log('Não valido!');
                break;
        }
    }

    return(
        <AccessibilityContext.Provider value={{accessibility, changeAccessibility}}>
            { props.children }
        </AccessibilityContext.Provider>
    )
}

export function useAccessibility() {
    const context = useContext(AccessibilityContext)
    return context
}