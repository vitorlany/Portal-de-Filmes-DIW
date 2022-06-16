var data = JSON.parse(localStorage.getItem("destaques"))
var search = new URLSearchParams(location.search)
var id = search.get("id")
var filme = data.results[id]


let filmeID = document.getElementById("filme-detalhes")
filmeID.innerHTML += `
    <div class="img-banner">
        <img src="https://image.tmdb.org/t/p/original/${filme.backdrop_path}" alt="Fundo ${filme.title}">
    </div>
    <div class="img-detalhes col-6">
        <img src="https://image.tmdb.org/t/p/original/${filme.poster_path}" alt="Poster ${filme.title}">
    </div>
    <div class="detalhes-filme col-6">
        <h1>${filme.title}</h1>
        <p>
            <span><strong>Lançamento: </strong>${filme.release_date}</span>
            <span><strong>Nota: </strong>${filme.vote_average}/10</span>
            <span><strong>Totais de votos: </strong>${filme.vote_count}</span>
        </p>
        <p>${filme.overview}</p>
    </div>
`