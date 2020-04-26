/*

Função do Babel : converter um codigo(transpilar)  do react
para um codigo que o browser entenda 
webpack: para cada tipo de arquivo (css.png...) eu vou converter o codigo
de uma maneira diferente

loaders: babel-loader: é o responsavel por converter o JS para q o browser entenda
css-loader..... sempre que tiver um pacote terminando com a extensão loader
o webpack usa os loaders para dar sentido pro JS

Execute: yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli


Configuração no babel : presets: s;ao conjuntos de configurações
criados por terceiros que nos podemos reaproveitar na nossa aplicação

module.exports = {
  presets: [
    '@babel/preset-env', ( entende o ambiente que a tua aplicação vai ser executada e vai converter o codigo baseado apenas no ambiente)
    '@babel/preset-react' ( entende o html dentro do JS e converter de uma maneira que o browser tambem entenda)
  ],
};

--outfile-- : é uma flag , onde vc quer jogar o  o arquivo convertido  especifique onde ele deve jogar


webpack vai automzticar  o tipo de arqiuvo que esta sendo requisitado na nossa aplicação 
é ativar um loader

entry: quql é o arquivo de entrada da nossa aplicação 
dirname: caminho do diretorio que o arquivo ta 

Sempre utiliza o path para não dar problemas com caminhos em sistemas operacionais

expresão regular : 
pra verificar se um arquivo termina co ma espres~sao JS : 
/\./
. = qlqr caractere
/ = define o ponto
$ = significa q a string tem q terminar com js, sem ela
o troço procura por alguem q tenha dentro de si js 

exclude: /node_modules/ = diz que quando importarmos um arquivo JS q ta dentro
da pasta node modules  eu não quero q ele passe pelo processo do babel , 

use:{loader: 'babel-loader',} = toda vez q eu for precisar de um arquivo 
js  e essa poha não tiver no nodemodules converte ele utilizando babel


Para que o webpack se autoazualize execute : 

yarn add webpack-dev-server -D

contentBase: qual q e o caminho pro diretorio  q contem 
os arquivos publicos da sua aplivação 


Conceitos do react: 
Componentização  : divide pedços da nossa aplicação em componentes
Componentes: são conjuntos isolados de html,css e javascript 
que pode ser reaproveitado quantas vezes tu qser dentro da aplcicação 

Dica: è dentro do id app que vai todo nosso codigo gerado pelo react 





*/