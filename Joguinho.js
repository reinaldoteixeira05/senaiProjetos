var dif=0 
var ranking=[]
function menu(){
    var opcao=Number(prompt("Bem Vindo ao Jogo para jogar selecione umas da opções abaixo \n 1-Contra uma Pessoa \n 2-contra o computador \n 3-Para ler as Regras \n 4-Exibir o Ranking \n 5-Para sair"))
    switch(opcao){
        case 1:
            var dificuldade=Number(prompt("Escolha a Dificuldade \n 1-Facil 0 a 100 \n 2-Medio 0 a 300 \n 3-Dificil 0 a 500"))
            switch(dificuldade){
                case 1:
                    dif=100
                    contra_usuario(dif);
                    break;
                case 2:
                    dif=300
                    contra_usuario(dif);
                    break;
                case 3:
                    dif=500
                    contra_usuario(dif);
                    break;
                default: alert("Oção invalida!!!")
                        menu()
                        break;
            }
            break;
        case 2:
            var dificuldade=Number(prompt("Escolha a Dificuldade \n 1-Facil 0 a 100 \n 2-Medio 0 a 300 \n 3-Dificil 0 a 500"))
            switch(dificuldade){
                case 1:
                    dif=100
                    contra_computador(dif);
                    break;
                case 2:
                    dif=300
                    contra_computador(dif);
                    break;
                case 3:
                    dif=500
                    contra_computador(dif);
                    break;
                default: alert("Oção invalida!!!")
                        menu()
                    break;
            }
            
            break;
        case 3:
            alert("#########->REGRAS<-#########\n O Objetivo do jogo e Advinhar um numero aleatorio\n O jogo possui 3 dificuldades cada uma aumentar os numeros que podem aparecer")
            menu()
            break;
        case 4:
            exibir_ranking(ranking)
            break;
        case 5:
            break;
        default: alert("Opção invalida!!!")
                    menu()
                    break;
    }
}

function contra_usuario(){
    var pensei=Math.floor(Math.random() * dif+ 1)
    var usuario1=prompt("Digite o nome do 1º Jogador")
    var usuario2=prompt("Digite o nome do 2º Jogador")
    var tentativaUsuario1=0
    var tentativaUsuario2=0
    var numero1=null
    var numero2=null

do{
    numero1=Number(prompt("Digite um  numero "+usuario1))
    tentativaUsuario1++
    if(numero1<pensei){
        console.log("--------------------------")
        console.log(usuario1+" digitou: "+numero1+" o Numero e maior que esse ")
    }if(numero1>pensei){
        console.log("--------------------------")
        console.log(usuario1+" digitou: "+numero1+" o Numero e menor que esse ")
    }if(numero1===pensei){
        alert("Acertou o numero era "+pensei)
        console.log("O numero de tentativas de "+usuario1+" foram "+tentativaUsuario1)
        jogadores.nome=usuario1
        jogadores.tentativas=tentativaUsuario1
        ranking.push(jogadores)
        console.log(jogadores)
        break;
    }
    numero2=Number(prompt("Digite um numero "+usuario2))
    tentativaUsuario2++
        if(numero2<pensei){
            console.log("---------------------------")
            console.log(usuario2+" digitou: "+numero2+" o Numero e maior que esse ")
            }if(numero2>pensei){
                console.log("---------------------------")
                console.log(usuario2+" digitou: "+numero2+" o Numero e menor que esse ")
                }if(numero2===pensei){
                    alert("Acertou o numero era "+pensei)
                    console.log("O numero de tentativas de "+usuario2+" foram "+tentativaUsuario2)
                    jogadores.nome=usuario2
                    jogadores.tentativas=tentativaUsuario2
                    ranking.push(jogadores)
                    console.log(jogadores)
                    break;
}
}while(numero1!=pensei)
    return menu()
}
function contra_computador(){
    var pensei=Math.floor(Math.random() * dif+ 1)
    var usuario1=prompt("Digite o nome do Jogador")
    var optmusPrime
    var tentativaUsuario1=0
    var tentativaUsuario2=0
    var numero1=null
    var jogadores={
        nome: null,
        tentativas: null,
    }
do{
numero1=Number(prompt("Digite um  numero "+usuario1))
tentativaUsuario1++
    if(numero1<pensei){
        console.log("----------------------------------------")
        console.log(usuario1+" digitou o "+numero1+" o Numero e maior que esse ")
            }if(numero1>pensei){
                console.log("----------------------------------------")
                console.log(usuario1+" digitou o "+numero1+" o Numero e menor que esse ")
                    }if(numero1===pensei){
                        alert(usuario1+" Acertou o numero era "+pensei)
                        console.log("O numero de tentativas de "+usuario1+" foram "+tentativaUsuario1)
                        jogadores.nome=usuario1
                        jogadores.tentativas=tentativaUsuario1
                        ranking.push(jogadores)
                        console.log(jogadores)
                        break;
}
optmusPrime=Math.floor(Math.random() * dif+ 1)
tentativaUsuario2++
    if(optmusPrime<pensei){
            console.log("----------------------------------------")
            console.log("OptmusPrime digiou: "+optmusPrime+" o numero e maior que esse ")
            }if(optmusPrime>pensei){
                    console.log("----------------------------------------")
                    console.log("OptmusPrime digiou: "+optmusPrime+" o numero e menor que esse ")
                    }if(optmusPrime===pensei){
                            alert(" OptmusPrime Acertou o numero era "+pensei)
                            console.log("O numero de tentativas de OptimusPrime foram "+tentativaUsuario2)
                            break;
                    }
            }while(numero1!=pensei)
            return menu()
}
function exibir_ranking(ranking){
    for(i=0;i<ranking.length;i++){
        for(j=i+1;j<ranking.length;j++){
        if(ranking[i].tentativas>ranking[j].tentativas){
            var aux=0
            aux=ranking[i]
            ranking[i]=ranking[j]
            ranking[j]=aux
        }
    }
    }
    var posicao=1
    for(k=0;k<ranking.length;k++){
        console.log("Na "+posicao+"º "+"Posição: "+ranking[k].nome)
        console.log("Tentativas: "+ranking[k].tentativas)
        posicao++
    }

}

menu()

