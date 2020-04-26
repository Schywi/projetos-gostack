import React, {useState,useEffect} from 'react'; /* pra que serve Usestate?  */
import api from './services/api'; 

import './App.css';

import Header from './components/Header';
/*
Se tu dominar isso GG: 
Domine os concentiso basicos , pq ate os troço mais fodão 
se baseim nesses concenitos 
*Componentes:
* Propriedades: alguma informação que podemos passar de um componente
pai para um componente filho 
obs: apartir do momento que um atributo do html e passado para um componente
do react chamamos de propriedade , 
* para colocar JS dentro do html q ta dentro do react , bota {JS}
*Estado 
*/
function App() {
  const [projects, setProjects] =  useState([]); 
/*toda vez q vc fazer uma função como ação do usuario começa com "handle" no nome  */

/*useEffeect não pode usar asyn await */
useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);

    });
  } , []);





async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

   // setProjects([...projects ,`Novo projeto ${Date.now()}` ]); 
 
   const response = await api.post('projects', {
    title: `Novo projeto ${Date.now()}`,
    owner: 'Lucas'
  
});

const project = response.data; 

setProjects([...projects, project]);

 
 
  }
/* Deu pau no key dps corrige isso  */

  return (
    <>
   
    <Header title="Zenitsu"> 
      <ul> 
            {projects.map(project => <li key={ project.id }> {project.title}</li>)}
          <button type="button" onClick={handleAddProject} > Adicionar Projeto</button>
       </ul>
    </Header>
    </>  
    );
}
/*Pode adicionar html como conteudo do componente */
/*Fragment: cria um conteiner para envolver 2 ou mais elementos 
mas sem criar uma div ou tag html , o que poderia dificultar
na estilização , fica assim: 
<> coicas</>  */

/* No react não pode ter um elemento abaixo do outro sem ter
alogo envolta deles tipo uma div : 
isso não pode: 
<Header/>
<Header/> 
COmponentes : cria algo para ser reaproveitado
mas isso pode <div>
<Header/>
<Header/>  <div/>*/
export default App; 