import { Link, Outlet, useMatch } from 'react-router-dom';
import './style.scss';

export function MainLayout(props){
    return (
        <div className="main-layout-component">
            <div className='main-layout-barralateral'>
                {
                    props.menulateral.map(itens=>
                        <Link to={'/' + itens.path}>
                            <li className={Boolean(useMatch('/' + itens.path)) ? 'ativo' : ""}>
                                {itens.title}
                            </li>
                        </Link>)
                }
            </div>
            <main className="main-layout-component-main">
                <Outlet />
            </main>
        </div>
    )
}