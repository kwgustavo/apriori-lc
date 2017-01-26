/*
	1	A C F
	2	A C D
	3	C D F
	4	D E C
	5	A E 
	6	A A



	Descrição O Código se fundamenta pela estrutura e geração de 
candidatos e exclui todos aqueles não frequentes.
	Reduntantemente o processo é refeito afim de obter um conjunto 
de canditados favoráveis igual a zero


	Probabilidade Condicionada

	P(A|B) = P(A u B) / P(B);

	///Independencia de eventos
	P( Ai U Aj | B ) = 

*/
var item=Array();
var quantidade=100; //quantidade de tuplas geradas aleatoriamente
//Definicao do array com itensets
var qntd_item=Array();
var a_somaItem=0;
var a_maiorItem={nd:"",s:0};

function DefineItens(){
	var 
Item=["A","B","C","D","E","F","G","Y","L","M","N","S","C","T"];
	//gerar 2 numeros randomicos//
	for(var i=0 ; i<quantidade ; i++){//quantidade de itens
		item[i]=Array();
		var num_itens=Math.round((Math.random()*10)%10)+4;
		for(var j=0; j<num_itens; j++){
			var rand= 
Math.round((Math.random()*13)%13);//seleção dos itenss
			item[i].push(Item[rand]);
		}
	}

}
function ContagemItens(){
	// var contagem=new Object();
	// for(var i=0; i<item.length;i++){
	// 	for(var j=0; j<item[i].length; j++){
	// 		for(k=0;k<contagem.length;k++){//percorre array 
contagem
	// 			if(contagem.item[i][j])
	// 		}
	// 	}
	// }
	for(i=0;i<item.length;i++){
		result= item[i].map(function(it, index,array){
			somaItem(it);
			//console.log(it+" index "+index+" array 
"+array);
		});
		//console.log(result);
	}
}

function somaItem(it){
	for(var i=0; i< qntd_item.length; i++){
		if(qntd_item[i].nd==it){
			qntd_item[i].s++;
			if(qntd_item[i].s>a_maiorItem.s){
				a_maiorItem.s=qntd_item[i].s;
				a_maiorItem.nd=it;
			}
			a_somaItem++;//quantidade de itens existentes
			return;
		}
		
	}
	a_somaItem++;//quantidade de itens existentes
	qntd_item.push({nd:it,s:1});

}

function gerarC(){//verificar o ultimo conjunto de L e os possíveis 
candidatos a entrarem


}

function gerarL(){
			var L= Array();
			k=0;
			for(var i=0; i< qntd_item.length ; i++){//cruzar 
os dados
				
qntd_item[i].prob=qntd_item[i].s/a_somaItem;
				for(var j=i; j<qntd_item.length; j++){
					if(j!=i){//se for diferente 
coloca
						
L[k++]={"nd":[qntd_item[i].nd,qntd_item[j].nd]};
					}
				}
			}

			return L;
}
function MostraItens(){
	for(i=0;i<item.length;i++){
		console.log(item[i]);
	}
	console.log("Suporte soma_item"+a_somaItem+" MaiorItem 
"+a_maiorItem.s+" "+a_maiorItem.nd);
	console.log(qntd_item);
}


DefineItens();
ContagemItens();
MostraItens();
console.log("\n");
console.log(gerarL());
//pesquisar no T e verificar qual itemset continua ou não 


function Apriori(intenset, dados){
	var contagem;
	for(var i=0 ; i < dados.length; i++){
		for(var j=0 ; dados[i].length; j++){

		}
	} 


}



