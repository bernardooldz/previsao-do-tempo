const key = "71fdf064f8586e34dac3a630dcf4e7e8"

//função para exibir os dados relativos a cidade pesquisada; cada linha devolve um resultado em seu campo devido
function exibirDados(dados){
    document.querySelector(".cidade_buscada").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".cidade_buscada").innerHTML = "Tempo em " + dados.name
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}

//função que busca a cidade digitada na API
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    exibirDados(dados)
}

//função que é ativada ao clicar no botão de busca (lupinha) e pega o valor digitado (cidade) no input.
function clickCity() {
    const cidade = document.querySelector("#cidade").value

    buscarCidade(cidade)
}


//função para executar a pesquisa com a tecla ENTER
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      clickCity();
    }
}, false);


//criação de variáveis e função para fazer o botão de dark-mode
const btn = document.querySelector('.btn')
const header = document.querySelector('header')
const caixaMaior = document.querySelector('.caixa-maior')
const footer = document.querySelector('footer')

//quando o botão de dark-mode é ativo adiciona a class active à class que ja estav no elemento, e que no css adicionará as modificações ao elemento.
btn.onclick = function(){
    this.classList.toggle('active')
    header.classList.toggle('active')
    caixaMaior.classList.toggle('active')
    footer.classList.toggle('active')
}