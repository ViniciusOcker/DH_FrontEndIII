import { createBrowserRouter, RouterProvider} from "react-router-dom"; 

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

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'aula/segunda',
          element: <SegundaAula />
        },
        {
          path: 'aula/terceira',
          element: <TerceiraAula />
        },
        {
          path: 'aula/quarta',
          element: <QuartaAula />
        },
        {
          path: 'aula/quinta',
          element: <QuintaAula />
        },
        {
          parth: 'aula/setima',
          element: <SetimaAula />
        },
        {
          path: 'aula/oitaiva',
          element: <OitavaAula />
        },
        {
          path: 'aula/decima/terceira',
          element: <DecimaTerceiraAula />
        },
        {
          path: 'aula/decima/terceira/mesadetrabalho',
          element: <DecimaMesaDeTrabalho />
        },
        {
          path: 'aula/decima/quinta',
          element: <DecimaQuintaAula />
        },
        {
          path: 'batatalhagames',
          element: <BatatalhaGames />
        },
        {
          path: 'login',
          element: <Login />
        }
      ]
    }
  ]);

  return ( <RouterProvider router={appRouter} /> )

}

export default App