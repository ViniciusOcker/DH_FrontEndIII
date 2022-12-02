import { Link, Outlet, useMatch } from 'react-router-dom';
import { useAccessibility } from '../../hooks/useAccessibility';
import { useTheme } from "../../hooks/useTheme";

import './style.scss';

export function MainLayout(props){

    const { theme } = useTheme();
    const { accessibility } = useAccessibility();

    return (
        <div className={'main-layout-component' + ' ' + theme + ' ' + ((accessibility.bigLetter)? 'bigLetter': '')}>
            <div className='main-layout-barralateral'>
                {
                    props.menulateral.map(
                        (itens,index)=>
                            (itens.title != "") ?
                                <Link to={'/' + itens.path} key={index}>
                                    <li className={Boolean(useMatch('/' + itens.path)) ? 'ativo' : ""}>
                                        {itens.title}
                                    </li>
                                </Link>
                            :
                                null
                    )
                }
            </div>
            <main className="main-layout-component-main">
                <Outlet />
            </main>
        </div>
    )
}