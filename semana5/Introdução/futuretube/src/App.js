import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  
  <header>

<h1> FutureTube </h1>

<div id="busca">
 <input type="text" placeholder="Escreva Aqui" />
 <button>Buscar</button>
</div>

</header>

<nav>
          <ul class="">
            <li><a href="#">Início</a></li>
            <li><a href="#">Em alta</a></li>
            <li><a href="#">Inscrições</a></li>
            <li><a href="#">Originais</a></li>
            <li><a href="#">Biblioteca</a></li>
            <li><a href="#">Histórico</a></li>
          </ul>
          

 </nav>

<div class="video-container">

 <div class="video1">
   <img src={require("./imagem/video1.jpg")}/>
  </div>

 <div class="video2">
 <img src={require("./imagem/video2.jpg")}/>
</div>

  <div class="video3">
  <img src={require("./imagem/video3.jpg")}/>
  </div>

  <div class="video4">
  <img src={require("./imagem/video4.jpg")}/>
  </div>

  <div class="video5">  
  <img src={require("./imagem/video5.jpg")}/>
  </div>

  <div class="video6">
  <img src={require("./imagem/video6.jpg")}/>
  </div>

  <div class="video7">
  <img src={require("./imagem/video7.jpg")}/>
  </div>

  <div class="video8">
  <img src={require("./imagem/video8.jpg")}/>
  </div>

</div>



<footer>
  <p> Oi! Eu sou da Turma Sagan! </p>

</footer>




    </div>
  );
}

export default App;
