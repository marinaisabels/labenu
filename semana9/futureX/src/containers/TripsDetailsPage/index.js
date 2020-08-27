import React from 'react'
import { connect } from 'react-redux'


class TripsDetailsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
        return(
            <div>
                <div>
                    <h3>Lista de Candidatos</h3>
                    <button>aceitar</button>
                    <button>rejeitar</button>
                </div>
            </div>
        )
    }
}

export default connect()(TripsDetailsPage);