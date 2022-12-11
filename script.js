console.log('PRIMEIRA LINHA OK')

//menu mobile desktop
document.querySelector(".menuMobile").addEventListener("click", function(){
    //gira o botão;
    document.querySelector('.menuMobile').classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
    document.querySelector('.logo_menu h1').classList.toggle('open')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('.botao.add').classList.toggle('open')
    document.querySelector('.botao.edi').classList.toggle('open')
    document.querySelector('.botao.del').classList.toggle('open')

})
let menu = document.querySelector('.menuMobileMob').children
//menu mobile desktop
document.querySelector(".menuMobileMob").addEventListener("click", function(){
    //gira o botão;
    document.querySelector('.menuMobileMob').classList.toggle('open');
    document.querySelector('header').classList.toggle('open');

    menu[0].classList.toggle('none');
    menu[1].classList.toggle('none');


})


//variaveis usadas

let itemDaVez = 0
let slotvazio = document.querySelector('.slotvazio')
let itemDaVezDisplay = 0
let widget = document.querySelectorAll('.widget_item')
let widgetQtd = 12
let mostrarItem = (widget)
let qtdeItensTela = document.querySelector('.botao.qtd')
let conteudoEditCoress = document.getElementsByClassName('conteudo_titulo_cores')

//aqui adiciona um conteudo
document.querySelector(".botao.add").addEventListener("click", function(){
    if( itemDaVezDisplay >= widgetQtd ){
        alert("Você atingiu o lime máximo de anotações :(")
    }else{
        qtdeItensTela.innerHTML = (`<h4>${itemDaVezDisplay + 1}</h4>`)
        slotvazio.classList.add('none')
        mostrarItem[itemDaVez].classList.toggle('none')
        return (itemDaVez = (itemDaVez + 1), itemDaVezDisplay = (itemDaVezDisplay + 1))

    }
});





let del = document.getElementsByClassName('del_item')
let delQtd = del.length
for ( let x = 0 ; x < delQtd; x++ ){

    del[x].addEventListener('click', function(){
            let widgets= document.getElementsByClassName('widget_item')
            console.log(itemDaVezDisplay)
            while(itemDaVezDisplay <= 1){
                console.log('validou é igual a 0')
                slotvazio.classList.remove('none')
                break;
            }
            
            if(itemDaVezDisplay === 0){

            }
            widgets[x].classList.add('none')
            widgets[x].classList.add('removed')
            qtdeItensTela.innerHTML = (`<h4>${itemDaVezDisplay - 1}</h4>`)
            return (itemDaVezDisplay = (itemDaVezDisplay - 1))
    })
    }



let editTitulo = document.querySelectorAll('.edit_editar')
let botaoCor = document.querySelectorAll('.edicao_titulo .cor')
let botaoCorQtd = botaoCor.length
    
for ( let x = 0 ; x < widgetQtd; x++ ){
         editTitulo[x].addEventListener('click', function(){
            let altenarIcone = widget[x].childNodes[1].childNodes[3].childNodes[1].childNodes
            let alterarFundo = widget[x].childNodes[1].childNodes[3].childNodes[1]
            let selecionarWidgetInput = widget[x].childNodes[5].childNodes[1]
            let selecionarWidgetCores = widget[x].childNodes[5].childNodes[3]

            // for(let z = 0 ; z < widgetQtd ; z++){
            //     if (conteudoEditCoress[z].classList.contains('none')) {
                    
            //         console.log('contem none')
            //      }else{
            //         conteudoEditCoress[z].classList.add('none')
            //      }
            // }

            alterarFundo.classList.toggle('bcor-destaque')
            altenarIcone[1].classList.toggle('none')
            altenarIcone[3].classList.toggle('none')
            selecionarWidgetInput.classList.toggle('none')
            selecionarWidgetCores.classList.toggle('none')

             //fechar todos outros edits

            
           
         })
    
}





//contar quantos widgets tem e retornar o valor
// Nota: o X descobre qual dos widget foi clicado e o XY descobre quais das 6 cores
for ( let x = 0 ; x < widgetQtd; x++ ){
    
    let containerWidgetCores = widget[x].childNodes[5].children[1].children[0].children
    let tituloCoresp = widget[x].children[0].children[0]

    //descobrir qual das 6 cores foi clicada
    for ( let xy = 0 ; xy < 6 ; xy++ ){
        containerWidgetCores[xy].addEventListener('click', function(){
        //removendo todos outros actives
        containerWidgetCores[0].classList.remove('active')
        containerWidgetCores[1].classList.remove('active')
        containerWidgetCores[2].classList.remove('active')
        containerWidgetCores[3].classList.remove('active')
        containerWidgetCores[4].classList.remove('active')
        containerWidgetCores[5].classList.remove('active')

        //colocar class ACTIVE no botão clicado
        containerWidgetCores[xy].classList.toggle('active')

         //resetando as cores
         tituloCoresp.className = "item_titulo";

        //Definindo nova cor
        tituloCoresp.classList.add(`c-cor` + (xy + 1))        

        // console.log(containerWidgetCores)
        // console.log(widget[x])
        // console.log(x , xy)

        })
    }

    //definindo input
    let inputTitulo = widget[x].children[2].children[1].children[2]
    let inputTituloValue = inputTitulo.value

    inputTitulo.addEventListener('keyup', function(a){
    
    
    if (a.key == 'Enter'){
    tituloCoresp.innerText = (inputTitulo.value)
    tituloCoresp.setAttribute('title', inputTitulo.value)

    //limpo o input
    inputTitulo.value = ""
    }

    })
    //adicionando conteúdo
    let inputConteudo = widget[x].children[2].children[0].children[0]
    let botaoAddConteudo = widget[x].children[2].children[0].children[1]
    let ulConteudo = widget[x].children[1].children[0]

    botaoAddConteudo.addEventListener('click', function(){
        if(inputConteudo.value == ''){
            inputConteudo.classList.add('input_vazio')
        }else{
            const newLi = document.createElement('li')
            //insiro o valor do input no elemento
            newLi.innerHTML = inputConteudo.value;
            //adiciono a lista criado la em cima
            ulConteudo.appendChild(newLi);

            inputConteudo.value = ""
        }
    })
    inputConteudo.addEventListener('keyup', function(a){

        
        if (a.key == 'Enter'){
            if(inputConteudo.value == ''){
                inputConteudo.classList.add('input_vazio')
            }else{
                inputConteudo.classList.remove('input_vazio')

                const newLi = document.createElement('li')
                //insiro o valor do input no elemento
                newLi.innerHTML = inputConteudo.value;
                //adiciono a lista criado la em cima
                ulConteudo.appendChild(newLi);
    
                //limpo o input
                inputConteudo.value = ""
                }     
            }  

    })



}
   
        














