import React from 'react';
import './App.css';
import MeusDados from './Components/dados'; 
import DadosDoMail from './Components/dadosmail';
import DadosEndereco from './Components/dadosendereco';
import BotaoVerMais from './Components/vermais';
import ExperienciaFuture from './Components/future4';
import ExperienciaOutsmart from './Components/Outsmart';
import RedeSociais from './Components/RedeSocial';

function App() {
  return (

    <div className="App">

        <PageSection>
        <MeusDados texto="Marina Isabel" imagem="https://pbs.twimg.com/profile_images/1195331646398046210/MRNVXlEg_400x400.jpg" />
        <DadosDoMail texto="Email: marinaisabels@live.com" imagem="https://image.flaticon.com/icons/svg/1250/1250973.svg"/> 
        <DadosEndereco texto="Rua Maria Francisca da Silva, 35" imagem="https://image.flaticon.com/icons/svg/1239/1239525.svg"/>
        </PageSection>
        <PageSection>
        <BotaoVerMais  texto="Ver Mais"/>
        </PageSection>
        <PageSection>
        <ExperienciaFuture texto="Formando desenvolvedores para o futuro"/>
        <ExperienciaOutsmart texto="Criando apps incríveis para grandes clientes"/>
        </PageSection>
        <PageSection>
        <RedeSociais titulo="Linkedin" imagem="https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482199-linkedin_78667.png"/>
        </PageSection>
          
</div>

  );
}

export default App;
