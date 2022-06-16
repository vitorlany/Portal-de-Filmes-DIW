const api_key = '48117ef2f2ff8afded54743bb48a5315'

filmesDestaques()
function filmesDestaques() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR`
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.onload = () => {
        construindoDestaques(request.response)
    }
    request.send()
}

function construindoDestaques(data) {
    let listaFilmes = JSON.parse(data).results
    let destaquesID = document.getElementById("filmesDestaqueDIV")
    for (let i = 0; i < 4; i++) {
        let filme = listaFilmes[i]
        destaquesID.innerHTML += `
        <div class="col-12 col-md-6 card-destaque">
              <a href="#">
                <img src="imgs/filme-judas/principal.jpg" alt="">
              </a>
            </div>
        `
    }
}