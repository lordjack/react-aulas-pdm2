import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Carro from './Carro';
import Calc from './Calc';
import ExCss from './ExCss';
import './style.css';

/*
Exercicio 15/04
No site stack blitz

1. Criar um componente chamado ExCss.js e aplicar os estilos do CSS como mostra a image anexa.

2. Colocar duas imagens dentro da página, uma chamando através da TAG Image e a segunda imagem chamando através do CSS. 

*/
function Monitor(props) {
  let polegadas = "22p";
 
  return (<div> <h2> Meu monitor!</h2>
      <h3>Polegadas: {polegadas}</h3>
      <h3>Marca: {props.marca}</h3>
  </div>);
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React 2',
      propMarca:""
    };
  }
  mudarMarca = () => {
    this.setState( {propMarca:"Dell"} );
  }
  render() {
    return (
      <div>
      <ExCss />
       <Calc />
        <Hello name={this.state.name} />
        <Carro cor="vermelho" modelo="Palio" ano="2018" marca="FIAT"/>
        <p>
          Start editing to see some magic happen 2:)
        </p>
        <Monitor marca={this.state.propMarca} />

        <button type="button" onClick={this.mudarMarca}>Mudar Marca</button>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));