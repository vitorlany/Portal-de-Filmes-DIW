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
            <a href="#">
                <img src="https://image.tmdb.org/t/p/original/${filme.poster_path}" alt="${filme.title}">
            </a>
        </div>
        `
    }
}