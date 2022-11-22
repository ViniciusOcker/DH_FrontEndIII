import { Link } from 'react-router-dom';

export function Home(){
  const itensBarNav = [
    {
      to: '/aula/segunda',
      title : 'segunda aula'
    },
    {
      to: '/aula/terceira',
      title: 'terceira aula'
    },
    {
      to: '/aula/quarta',
      title: 'quarta aula'
    },
    {
      to: '/aula/quinta',
      title: 'quinta aula'
    },
    {
      parth: '/aula/setima',
      title: 'setima aula'
    },
    {
      to: '/aula/oitaiva',
      title: 'oitava aula'
    },
    {
      to: '/aula/decima/terceira',
      title: 'decima terceira aula'
    },
    {
      to: 'aula/decima/terceira/mesadetrabalho',
      title: 'decima terceira aula mesa de trabalho'
    },
    {
      to: '/aula/decima/quinta',
      title: 'decima quinta aula'
    },
    {
      to: '/batatalhagames',
      title: 'batatalha games'
    },
    {
      to: '/login',
      title: 'login'
    }
  ]
  return(
    <ul>
      {
        itensBarNav.map(itens=><li>
          <Link to={itens.to}>
            {itens.title}
          </Link>
        </li>)
      }
    </ul>
   )
}