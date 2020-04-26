/*

Inicie  o servidor e cria 2 projetos no isnominia 
Instale  no front end : yarn add axios , 
axios: é o responsavel por fazer as chamadas APi no nosso fron end 

Pasta services :  armazena qlqr tipo de arquivo que vai fazer a comunicação
com qlqr serviço externo 

.create: cria uma instancia  , adiciona a baseURL do insmonia


useeffect: usa para disparar funções sempre que npos tiver 
alguma informação alterada ou não 

useEffect(() => {}, []) , 1º parametro : {} qual função vc quer disparar
2º parametro quando vc quer disparar a função []

Se vc quiser disparar assim que projects for alterado faça [projects
] projects="se for apenas
uma fez então deixa [] vazio"></div>
[] = array de dependencias  , vc inclui as variaveis q vc usa dentro
da primeira função 

.then() = quando o troço rodar vai ter disponivel a resposta


Erro de CORNS: toda vez que tu vai se conectar com o backend 
existe tecnicas para evitar que outros frontends acessem nossos dados

instale no back end : yarn add cors 
cors : permite que qlqr frontend de qlqr lugar acesse , pra ambiente
de desenvolvimento ta tranquilo


Sempre q vc inicializa um estado : para definir qual o valor inicial do estado 
e bom colocar um valor inicial que vai seguir no mesmo tipo de variavel 
que o estado vai ter dps , ex: se o projects vai ser array 
inicializa o estado com [] 









*/