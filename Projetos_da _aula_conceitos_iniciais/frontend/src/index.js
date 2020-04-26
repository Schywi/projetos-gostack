import React from 'react';
import {render} from 'react-dom';
import App from './App.js'; 

/*
conceitos de react: 
JSX: HTML dentro do JS
Sempre q formos criar um componente/arquivo da aplicação comça com letra maiscula
Componetne dentro do react: é uma função que retorna html
todos os componentes/arquivos devemter REact importado
TUto no react e um componente 

estrutura de um componetnes: 
import react....
function App() { return html}
export default App;

*/
render(<App /> , document.getElementById('app')
  );

  /*Toda função do componentes que nois cria no react, nos podemos
  escrever como se fosse tag do html so q como ela não tem conteudo
  vc fecha nela msm , ex: <App /> 
  
  Crie uma pasta "componets" dentro de src , e coloque os compoentnes "Header.js"
  
  */