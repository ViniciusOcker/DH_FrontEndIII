import './style.scss';

import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useAccessibility } from '../../hooks/useAccessibility';

export function Configurations() {

    const { theme, changeTheme } = useTheme();
    const { accessibility, changeAccessibility } = useAccessibility();

    return (

        <div className={'configurations-component' + ' ' + theme + ' ' + ((accessibility.bigLetter)? 'bigLetter': '')}>

            <h1>Configurações</h1>

            <form>

                <section>

                    <h1>Temas</h1>

                    <div>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                        <label htmlFor="light"> Claro</label>
                    </div>
                    <div>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                        <label htmlFor="dark"> Escuro</label>
                    </div>
                    <div>
                        <input type="radio" name="theme" id="high-contrast" checked={theme === 'high-contrast'} onChange={() => changeTheme('high-contrast')} />
                        <label htmlFor="high-contrast"> Alto constrante</label>
                    </div>
                </section>
                <section>
                    <h1>Acessibilidade</h1>
                    <input type="checkbox" name="big-letters" id="big-letters" checked={accessibility.bigLetter} onChange={()=> changeAccessibility('bigLetter')} />
                    <label htmlFor="big-letters"> Letras grandes</label>
                </section>
            </form>

        </div>

    )

}