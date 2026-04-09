async function buscarFilme() {
  let input = document.getElementById("input").value
  let resultado = document.getElementById("resultado")

  if (input === "") {
    resultado.innerHTML = "<p>Digite o nome de um filme.</p>"
    return
  }

  resultado.innerHTML = "<p>Carregando...</p>"

  let url = `https://www.omdbapi.com/?apikey=trilogy&s=${input}`

  try {
    let resposta = await fetch(url)
    let dados = await resposta.json()

    resultado.innerHTML = ""

    if (!dados.Search) {
      resultado.innerHTML = "<p>Nenhum filme encontrado.</p>"
      return
    }

    dados.Search.forEach(filme => {
      let poster = filme.Poster !== "N/A" 
        ? filme.Poster 
        : "https://via.placeholder.com/300x450?text=Sem+Imagem"

      let div = document.createElement("div")
      div.classList.add("filme")

      div.innerHTML = `
        <img src="${poster}">
        <h3>${filme.Title}</h3>
        <p>${filme.Year}</p>
      `

      resultado.appendChild(div)
    })

  } catch (erro) {
    resultado.innerHTML = "<p>Erro ao buscar filmes.</p>"
  }
}
