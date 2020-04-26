const express = require('express'); 
const cors = require('cors');
const {uuid} = require('uuidv4');

const app = express(); 


app.use(cors()); 
app.use(express.json());

const projects = []; 
/*NÃO USE ESSA TEANICA    pq toda vez q o ervidor reinicia vc perde tudo
que tava em memoria */

/* O interceptador buga o proximo app.use, para evitar isso usa o paramentro next  */

function logRequests (request, response, next) {
  const { method , url } = request; 

  const logLabel = `[${method.toUpperCase()}] ${url}` ;

  console.log(logLabel);
  
  return next(); // pula pro proximo middlewer
}
app.use(logRequests);
/* 3º forma de se usar os midwares , indicando ocaminho :
app.use('/projects/:id' , validateProjectId)  , 
O maior conceito do express é os midwares, 
next pula o primeiro codigo debaixo do midware
são funções q recebem (request, response, next)*/

app.get('/projects', (request, response) => {
  const {title} = request.query; 

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects; 

  return response.json(results);
});


app.post('/projects', (request, response) => {
  const {title, owner} = request.body; 

  const project = {id: uuid(), title, owner};
  projects.push(project);

  /*Exibe o projeto recem criado e não alista completa*/

  return response.json(projects);
});


app.put('/projects/:id', (request, response) => {
  const {id} = request.params;
  const {title , owner} = request.body;
  
  const projectIndex = projects.findIndex(project => project.id === id); 
  /* .find() procura por algo dentro do array , saber a posição do projeto
  ProjectIndex, se ocorrer um erro na aplicação o codigo http começara com 4 */

  if(projectIndex < 0 )  {
    return response.status(400).json({error: 'Project not found.'});
  }

  const project  = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project; 

  return response.json(project);
});


app.delete('/projects/:id', (request, response) => {
  const {id} = request.params; 

  const projectIndex = projects.findIndex(project => project.id === id); 
  
  if(projectIndex < 0 )  {
    return response.status(400).json({error: 'Project not found.'});
  }
  projects.splice(projectIndex, 1);
  /*splice = retira uma informação de um array, splice (indice q qer remover, numero do indice) */

  return response.status(204).send()
  /* mensaagem sem conteudo envia com codigo  */
});




app.listen(3333, () => {
   console.log("👌Back-end started!!");
});