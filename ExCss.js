import React from 'react';
import styles from './folha.module.css';

class ExCss extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "12px",
      fontFamily: "Arial",
      fontSize: 18
    };
    const imgEx = {
         width: 46,
         height: 44,
         background: url('img_navsprites.gif')
    };
    const myBord = {
       borderStyle: 'solid'
    };
    return (
      <div>
      <h1 style={mystyle}>Bem Vindo ao CSS no React!</h1>
      <p style={{color:'red'}} > Add seu estilo</p>

       <h3 style={myBord} > Chamada Folha de Estilo </h3>
      </div>
    );
  }
}

export default ExCss;