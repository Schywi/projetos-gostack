/* msm que o React importado não seja untilizado vc deve importalo
o expor default pode ser usado dentro da propria função  */

import React from 'react'; 
/*desestruture o codigo */

/*propriedade childetrn: é todo o conteudo que a componente, usa para acessar ece
conteudo , dai bota ele como retorno recebeu */
export default function Header({ title, children })  {
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  )
}


/* Para retornar um conrteudo html dento + de uma linha bota
return (tag html) */