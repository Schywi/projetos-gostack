/*
Imutabilidade: Garantir performace mesmo em aplicações que contenham  que contencham 
muitos dados


Percorer a variavel e retornar algo ex:
const projects = ['Desenvolvimento de app', 'Front-end web']; 

..... {projects.map(project => <l1>{projects}</li>)}


Quando vc tem uma interação no react que eprcorre um vetor ou lista , tu tem q identificar
o primeiro elemento que vem no começo da inreação informe a propriedade key=(), qual é a informação que é 
unica para cada projeto 
{projects.map(project => <li key=()> {project}</li>)}

onclick: nome do evento que vai disparar uma função quando o usuario clicar nele

para usar estados: add ", {useState}" ao import react 
useState: retorna um array com 2 posições , 
1º retorna a variavel com seu valor inicial ( q ta dentro do useState)
2º função para atualizarmos esse valor 

ex: const [project, setProjects] = [useState(.....] 
  Para alterar o valor de project chamamos a função setProjects ( o sedungo parametro do useState)


  /* não pode mutar variaveis = alterar o seu formato , excluir informações
    incluir informações etc, diretamente, vc precisa recriar aquela informação com as alterações que vc quer
    TU tem q evitar no React qlqr metodo ou função que vai alterar diretamente o valor original 
    etc: .push , devemos utilizar funções que vão gerar um novo array /valor  
    
    Para mecher com imutabilidade:
    setProjects([])
    1º cria um novo array
    2º copia o antigo array "...projects"
    3º adiciona as novas informações
    
  setProject: vai mandar o novo projeto para ser renderizado na web 



    */




