fronteditor.dev/nlw-unite

#HTML

*Hypertext*

*Markup*
- Tag
- Atributos

*Language*

#CSS
Cascading StyleSheet 
```css
/* declarações */
body{
  background-color: black;
  color: white
}
/*   font: 300 peso da fonte 16px tamanho da fonte /140% espaçamento da linha 'Roboto', sans-serif;
 */

```


#JavaScript
```js
// Variaveis
const mensagem = 'Oi , tudo bem ?'
//Tipos de Dados
 //number
 //string
//Funcoes
//alert(mensagem)


// objeto javascript (= {})
//estruturação dos dados - modelo para futuro preenchimento
const participante = {
  nome: "Marianna Oteri",
  email: "mari@gmail.com",
  dataInscricao: new Date(2024, 2,22, 19,20),
  dataCheckin: new Date(2024, 2, 25, 22, 00)
}

//let - mais valores, variavel alterável
// array 
let participantes = [{
  nome: "Marianna Oteri",
  email: "mari@gmail.com",
  dataInscricao: new Date(2024, 2,22, 19,20),
  dataCheckin: new Date(2024, 2, 25, 22, 00)
}]

  //estrutura de repetição - loop
  for ( let participante of participantes){
    // faça alguma coisa aqui
    //enquanto houverem itens/pessoas nessa lista
  }
```