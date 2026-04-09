async function buscarFilme() {
  let input = document.getElementById("input").value

  if (input === "") return

  let url = `https://www.omdbapi.com/?apikey=trilogy&s=${input}`

  let resposta = await fetch(url)
  let dados = await resposta.json()

  let resultado = document.getElementById("resultado")
  resultado.innerHTML = ""

  if (!dados.Search) {
    resultado.innerHTML = "<p>Nenhum filme encontrado.</p>"
    return
  }

  dados.Search.forEach(filme => {
    let div = document.createElement("div")
    div.classList.add("filme")

    div.innerHTML = `
      <h3>${filme.Title}</h3>
      <img src="${filme.Poster}" width="150">
      <p>${filme.Year}</p>
    `

    resultado.appendChild(div)
  })
}
