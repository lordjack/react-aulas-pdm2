import React from 'react';
import styles from './folha.module.css';
import imgEx from './img/imgEx.png';

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
       
    };
    const myBord = {
       borderStyle: 'solid'
    };
    return (
      <div>
      <h1 style={mystyle}>Bem Vindo ao CSS no React!</h1>
      <p style={{color:'red'}} > Add seu estilo</p>

       <h3 style={myBord} > Chamada Folha de Estilo </h3>
       <img src={imgEx} alt="logo" />
      </div>
    );
  }
}

export default ExCss;