import { Link, Outlet } from 'react-router-dom';
import './style.scss';

export function MainLayout(){
    return (
        <div className="main-layout-component">
            <header className="main-layout-component-header">
                <h1>
                    Layout principal
                </h1>
                <Link to="/">
                    <button>
                        Ir para pagina inicial
                    </button>
                </Link>
            </header>
            <main className="main-layout-component-main">
                <Outlet />
            </main>
        </div>
    )
}