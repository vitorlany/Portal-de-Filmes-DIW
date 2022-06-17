const api_key = '48117ef2f2ff8afded54743bb48a5315'
destaqueCreate()

function destaqueCreate() {
    if (!localStorage.getItem("destaques")) {
        var destaquesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR`
        let request = new XMLHttpRequest()
        request.open("GET", destaquesURL, true)
        request.onload = () => {
            localStorage.setItem("destaques", request.response)
            data = JSON.parse(request.response)
            construindoDestaques(data)
        }
        request.send()
    } else {
        let cache = localStorage.getItem("destaques")
        data = JSON.parse(cache)
        construindoDestaques(data)
    }
}

function construindoDestaques(data) {
    let listaFilmes = data.results
    let destaquesID = document.getElementById("filmesDestaqueDIV")
    let tamanho = 4
    let tamanhoAleatorio = Math.floor(Math.random() * ((20) - tamanho + 1) + tamanho)
    for (let i = (tamanhoAleatorio - 4); i < tamanhoAleatorio; i++) {
        let filme = listaFilmes[i]
        destaquesID.innerHTML += `
        <div class="col-12 col-md-6 card-destaque">
            <a href="/detalhes.html?id=${i}">
                <img src="https://image.tmdb.org/t/p/original/${filme.poster_path}" alt="${filme.title}">
            </a>
        </div>
        `
    }
}

porVim()
function porVim() {
    var upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=pt-BR`
    let request = new XMLHttpRequest()
    request.open("GET", upcoming, true)
    request.onload = () => {
        let lancando = JSON.parse(request.response).results
        let aleatorio = Math.floor(Math.random() * (20 - 0 + 1) + 0)
        let filme = lancando[aleatorio]
        let porVimID = document.getElementById("porvim")
        porVimID.innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 imagem-Porvim">
                    <img src="https://image.tmdb.org/t/p/original/${filme.poster_path}" alt="Sem foto">
                </div>
                <div class="col-12 col-md-6">
                    <h3>${filme.title}</h3>
                    <p><span><strong>Lançamento: </strong>${filme.release_date}</span></p>
                    <p><strong>Sinopsse: </strong>${filme.overview}</p>

                    <p>
                    <h6><strong>Elenco</strong></h6>
                    Anthony Hopkins | Olivia Colman | Imogen Poots
                    </p>

                    <p>
                    <h6><strong>Avaliação</strong></h6>
                    <span><i class="fa-solid fa-star"></i>${filme.vote_average} de ${filme.vote_count} votos</span>
                    </p>
                </div>
            </div>
        </div>
    `
    }
    request.send()
}

function pesquisa() {
    let pesquisa = document.getElementById("filme-pesquisa").value 
    window.location.replace(`/pesquisa.html?id=${pesquisa}`)
}