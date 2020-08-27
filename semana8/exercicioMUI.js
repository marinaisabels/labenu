import React from 'react'
import Button from '@material-ui/core/Button'
import Motorcycle from '@material-ui/icons/Motorcycle'
import Save from '@material-i/icons/Save'
import AlarmAdd from '@material-i/icons/AlarmAdd'
import DiscFull from '@material-i/icons/DiscFull'
import Fireplace from '@material-i/icons/Fireplace'

// Exercício 1 - Button 
// Exercicio 2 - Icons 

function App(){
    return(
        <div>
            {/* Exercício 1 */}
            <button size='medium'>Large</button>
            <button size='small'>Small</button>
            <button variant='medium'>Fab</button>
            <hr/> 

            {/* Exercício 2 */}
            <Motorcycle/>
            <Save/>
            <AlarmAdd/>
            <DiscFull/>
            <Fireplace/>


        </div>
    )
}

    export default App 