import React from 'react'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Badge from '@material-ui/core/Badge'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Motorcycle from '@material-ui/icons/Motorcycle'
import Save from '@material-ui/icons/Save'
import AlarmAdd from '@material-ui/icons/AlarmAdd'
import DiscFull from '@material-ui/icons/DiscFull'
import Fireplace from '@material-ui/icons/Fireplace'
import Mail from '@material-ui/icons/Mail'


// Exercício 1 - Button 
// Exercicio 2 - Icons 
// Exercício 3 - Cores nos botões 
// Exercicio 4 - Criando Botões com formas diferentes 

const MeuBotao = styled(Button)`
  :hover {
    background: orange;
  }
`



// const meuTema = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#FF00FF'
//     },
//     secondary: {
//       main: '#00FF00'
//     },
//   },
// })



function App(){
    return(
        <MuiThemeProvider theme={meuBotao}>
            {/* Exercício 1 */}
            <Button size="medium">Large</Button>
            <Button size="small">Small</Button>
            <Button variant="fab">+</Button>
            <hr/> 

            {/* Exercício 2 */}
            <Motorcycle/>
            <Save/>
            <AlarmAdd/>
            <DiscFull/>
            <Fireplace/>
            <hr/>

            {/* Exercicio 3 */}
            <Switch color = "secondary"/>
            <Switch color = "primary"/>
            <Badge badgeContent = {60} color ="primary">
              <Mail/>
            </Badge>
            <hr/>

          {/* Exercício 4  */}
            <Button  color= "primary" variant="contained">Olá</Button>
            <Button color = "secondary" variant="fab">100</Button>
        </MuiThemeProvider>
    )
}

    export default App 
