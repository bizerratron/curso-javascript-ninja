# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
var soma = function(a, b){
  return (a+b);
 };

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(4,6)+5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var sad;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
   O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var valorAtual = function(valor, sad){
  this.sad = valor;
  return "O valor da variavel agora é "+this.sad+".";
};

// Invoque a função criada acima.
valorAtual(14, sad);

// Qual o retorno da função? (Use comentários de bloco).
'O valor da variavel agora é 14.'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
var tyrael = function(a, b, c){
  if((a == null) || (b == null) || (c == null)){
   return "Preencha todos os valores corretamente.";
   }
  return (a*b*c)+2;
 };

// Invoque a função criada acima, passando só dois números como argumento.
tyrael(3,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Resultado: 'Preencha todos os valores corretamente.'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tyrael(3,5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Resultado: 77

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
var azmodan = function(a,b,c){
	if((a!=null) && (b == null) && (c == null)){
		return a;
	}else if ((b!=null) && (c == null) && (a == null)){
		return b;
	}else if ((c!=null) && (b == null) && (a == null)){
		return c;
	}

	if((a!=null) && (b != null) && (c == null)){
		return a+b;
	}else if ((b!=null) && (c != null) && (a == null)){
		return b+c;
	}else if ((b ==null) && (c != null) && (a != null)){
		return a+c;
	}
	if((a!=null) && (b != null) && (c != null)){
		return (a+b)/c;
	}

	if((a==null) && (b == null) && (c == null)){
		return false;
	}

	return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
azmodan(1);
  //1
azmodan(4,5);
  //9
azmoda(6,6,2);
  //6
azmodan();
  //false
