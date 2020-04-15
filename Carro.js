import React from 'react';

class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modelo: "Focus",marca:"FORD", ano:"2019", cor:"azul"};
  }

  render() {
    return <div>
            <h2>Exemplo Carro</h2>
            <h4>Eu tenho um carro modelo:  {this.state.modelo}!</h4>
            <h4>Marca: {this.state.marca}</h4>
            <h4>da cor:  {this.state.cor}!</h4>
            <h4>Ano: {this.state.ano}</h4>

            <h4>Exemplo com State</h4>
           <h4>Eu tenho um carro modelo:  {this.props.modelo}!</h4>
            <h4>Marca: {this.props.marca}</h4>
            <h4>da cor:  {this.props.cor}!</h4>
            <h4>Ano: {this.props.ano}</h4>
            
    </div>
    ;
  }
}

export default Carro;