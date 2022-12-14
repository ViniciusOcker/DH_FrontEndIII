import { createBrowserRouter, RouterProvider} from "react-router-dom"; 
import { ThemeProvider } from "./hooks/useTheme";

import { OitavaAula } from './lessons/OitavaAula';
import { QuartaAula } from './lessons/QuartaAula';
import { QuintaAula } from './lessons/QuintaAula';
import { SegundaAula } from './lessons/SegundaAula';
import { SetimaAula } from './lessons/SetimaAula';
import { TerceiraAula } from './lessons/TerceiraAula';
import { BatatalhaGames } from './pages/BatatalhaGames';
import { DecimaTerceiraAula } from './lessons/DecimaTerceiraAula';
import { Login } from './pages/Login';
import { DecimaMesaDeTrabalho } from './lessons/DecimaTerceiraAulaMesaDeTrabalho';
import { DecimaQuintaAula } from './lessons/DecimaQuintaAula';
import { MainLayout } from "./components/MainLayout";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Postagem } from "./pages/Postagem";
import { Configurations } from "./pages/Configurations";
import { AccessibilityProvider } from "./hooks/useAccessibility";

function App() {
    let menuLateral = [
      {
        path: '',
        title: 'Home',
        element: <Home />
      },
      {
        path: 'configuration',
        title: 'Configuração',
        element: <Configurations />
      },
      {
        path: 'aula/segunda',
        title : 'segunda aula',
        element: <SegundaAula />
      },
      {
        path: 'aula/terceira',
        title: 'terceira aula',
        element: <TerceiraAula />
      },
      {
        path: 'aula/quarta',
        title: 'quarta aula',
        element: <QuartaAula />
      },
      {
        path: 'aula/quinta',
        title: 'quinta aula',
        element: <QuintaAula />
      },
      {
        path: 'aula/setima',
        title: 'setima aula',
        element: <SetimaAula />
      },
      {
        path: 'aula/oitaiva',
        title: 'oitava aula',
        element: <OitavaAula />
      },
      {
        path: 'aula/decima/terceira',
        title: 'decima terceira aula',
        element: <DecimaTerceiraAula />
      },
      {
        path: 'aula/decima/terceira/mesadetrabalho',
        title: 'decima terceira aula mesa de trabalho',
        element: <DecimaMesaDeTrabalho />
      },
      {
        path: 'aula/decima/quinta',
        title: 'decima quinta aula',
        element: <DecimaQuintaAula />
      },
      {
        path: 'batatalhagames',
        title: 'batatalha games',
        element: <BatatalhaGames />
      },
      {
        path: 'login',
        title: 'login',
        element: <Login />
      },
      {
        path: 'postagem',
        title: 'postagem',
        element: <Posts />,
      },
      {
        path: 'postagem/:id',
        title: '',
        element: <Postagem />
      }
  ]
    const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout menulateral={menuLateral} />,
      children: menuLateral
    }
  ]);

  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <RouterProvider router={appRouter} />
      </AccessibilityProvider>
    </ThemeProvider>
  )

}

export default App