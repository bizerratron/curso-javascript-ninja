/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayooo = ['Rinha de Galo', 'Galo de Calça', 'Tigresa Vip', 'Super Índio', 'Cerol on hand'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var fuckao = function(array){
  return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
fucako(arrayooo[1]);
'Galo de Calça'
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var queriaSerRico = function(array, num){
  return array[num];
 };

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var animais = ['Urso', 'Peixe', 'Cachorro', 'Super Índio', 'Gato'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
fuckao(animais);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function (bookname) {
  var books = {
    'world_of_warcraft_a_ruptura': {
      quantidadePaginas: 336,
      autor: 'Christie Golden',
      editora: 'Galera Record'
    },
    'world_of_warcraft_mares_da_guerra': {
      quantidadePaginas: 350,
      autor: 'Christie Golden',
      editora: 'Galera Record'
    },
    'world_of_warcraft_sombras_da_horda': {
      quantidadePaginas: 294,
      autor: 'Christie Golden',
      editora: 'Galera Record'
    }
  };

  if (bookname !== undefined) {
    return books[bookname];
  }
  
  return books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('world_of_warcraft_sombras_da_horda'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
*/
console.log('O livro world_of_warcraft_sombras_da_horda tem '+book('world_of_warcraft_sombras_da_horda').quantidadePaginas+' páginas.');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro world_of_warcraft_sombras_da_horda é '+book('world_of_warcraft_sombras_da_horda').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro world_of_warcraft_sombras_da_horda foi publicado pela editora '+book('world_of_warcraft_sombras_da_horda').editora+".");
