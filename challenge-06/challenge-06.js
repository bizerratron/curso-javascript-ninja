/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship;

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ['Bonde do Tigrão', 'NASA', 'Flamengo', 'IFES', 'Casas Bahia'];

console.log( 'Times que estão participando do campeonato: '+'\n'+teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function(num){
    if(num == 1){
        return "O time que está em "+num+"°"+" lugar é o "+teams[0];
    }else if(num == 5){
        return "O time que está em "+num+"°"+" lugar é o "+teams[4];
    }else if(num > 1 && num < 5){
        return "O time que está em "+num+"°"+" lugar é o "+teams[num-1];
    }
    return "Não temos a informação do time que está nessa posição.";
}

console.log(showTeamPosition(2));
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(2));
console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(5));

console.log(showTeamPosition(7));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var estruturaWhile = function(){
    var num = 20;
    do{
        console.log(num);
        num++;
    }while(num < 31)
}

estruturaWhile();

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex = function(cor){
    switch(cor){
        case "red":
            console.log("O hexadecimal para a cor red é "+"ff0000.");
            break;
        case "blue":
            console.log("O hexadecimal para a cor blue é "+"0000ff.");
            break;
        case "green": 
            console.log("O hexadecimal para a cor green é "+"00ff00.");
            break;
        case "yellow":
            console.log("O hexadecimal para a cor yellow é "+"ffff00.");
            break;
        case "black":
            console.log("O hexadecimal para a cor black é "+"000000.");
            break;
        default:
            console.log("Não temos o equivalente hexadecimal para "+cor+".");

    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("black");
convertToHex("yellow");
convertToHex("white");
convertToHex("lime");
convertToHex("green");
convertToHex("blue");
convertToHex("red");
convertToHex("bestado");
