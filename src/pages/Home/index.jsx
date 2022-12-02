import { useAccessibility } from '../../hooks/useAccessibility';
import { useTheme } from '../../hooks/useTheme';
import './style.scss'

export function Home(){
  const { theme } = useTheme();
  const { accessibility } = useAccessibility();
  return(
    <div className={'HomeComponent' + ' ' + theme + ' ' + ((accessibility.bigLetter)? 'bigLetter': '')}>
      <p>Seja bem-vindo a pagina inicial!</p>
    </div>
   )
}