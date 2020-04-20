import React from 'react';
import styles from './folha.module.css';
import imgEx2 from 'imgEx2.jpg';

class ExCss extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "12px",
      fontFamily: "Arial",
      fontSize: 18
    };

    const myBord = {
       borderStyle: 'solid'
    };
    return (
      <div>
      <h1 style={mystyle}>Bem Vindo ao CSS no React!</h1>
      <p style={{color:'red'}} > Add seu estilo</p>

       <h3 style={myBord} > Chamada Folha de Estilo </h3>
       <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Paris" style={{width:200}} />
      </div>
    );
  }
}

export default ExCss;