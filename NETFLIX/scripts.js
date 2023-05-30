const URL_BASE = "https://api.themoviedb.org/3/"
const LINGUAGEM = 'language=pt-BR';
const API_KEY = 'api_key=b4b5f9d98442f11bbdd50a5adf70f1d1';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


async function vitrine(){
    // 1. ESCOLHA ALEATORIA DE UM NUMERO DE 1 A 20
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }  
    const aleatorio = randomIntFromInterval(0, 19)

    // 2. CHAMADA GET PARA 20 FILMES MAIS POPULARES
    let filmes = await (await fetch(`${URL_BASE}movie/popular?${API_KEY}&${LINGUAGEM}&page=1`)).json()
    // 2.1 CHAMADA DE UM FILME ALEATÓRIO
    let filme = filmes.results[aleatorio]
    console.log(filme)

    // 3. INSERÇÃO NO HTML
    filme.poster_path

    document.querySelector(".vitrine").innerHTML += `
    <div class="poster-conteiner">
      <div class="poster">
      
      </div>
    </div>
    `
}

vitrine()