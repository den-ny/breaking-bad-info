let characterButton = function () {
  document.location = "characters.html"
}

let episodeButton = function () {
  document.location = "episodes.html"
}

let characterUrl = "https://breakingbadapi.com/api/characters"
let onlyBreakingBadEpisodes = "https://www.breakingbadapi.com/api/episodes?series=breaking%20bad"
let episodeInfoUrl = "https://api.tvmaze.com/shows/169/episodes"
let episodeCharacterUrl = "https://www.breakingbadapi.com/api/episodes"

let search = function (event) {
  document.querySelector('.char-search').innerHTML = ""
  document.querySelector('.title-search').innerHTML = ""
  event.preventDefault()
  let value = document.querySelector('form').elements[0].value
  let newCharacterUrl = characterUrl + `?name=${value}`

  fetch(newCharacterUrl)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        document.querySelector('.char-search').innerHTML +=
          `<div>${r[i].name}<br>
            <div class ="image-container">
            <a href="https://en.wikipedia.org/wiki/${r[i].portrayed}" target="_blank" rel="noopener noreferrer">
              <img src= ${r[i].img} alt="${r[i].name}"></img></a>
            </div>
            Status: ${r[i].status}
          </div>`
      }
    })

  let lowerCaseValue = document.querySelector('form').elements[0].value.toLowerCase()
  let query = []
  fetch(episodeInfoUrl)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        if (r[i].name.toLowerCase().indexOf(lowerCaseValue) !== -1) {
          query.push(i + 1)

          document.querySelector('.title-search').innerHTML +=
            `<div class ="episode${i + 1}"> 
              <p>${r[i].name} : Season: ${r[i].season} Episode: ${r[i].number}</p>
              <div class="ep${i + 1}-container"> 
                <div class ="image-container">
                  <img src="${r[i].image.medium}"></img>
                </div>
                <div class="text${i + 1}-container">
                  ${r[i].summary}
                </div>
              </div>
            </div>`
        }
      }
      for (let j = 0; j < query.length; j++) {
        let tempQuery = episodeCharacterUrl + `/${query[j]}`
        fetch(tempQuery)
          .then(re => re.json())
          .then(res => {
            for (let k = 0; k < res.length; k++) {
              let tempChar = res[k].characters
              for (let l = 0; l < tempChar.length; l++) {
                if (l === tempChar.length - 1) {
                  document.querySelector(`.text${res[k].episode_id}-container`).innerHTML += `${tempChar[l]}`
                }
                else {
                  document.querySelector(`.text${res[k].episode_id}-container`).innerHTML += `${tempChar[l]}, `
                }
              }
            }
          })
      }
    })
}

document.querySelector('form').addEventListener('submit', search)
document.querySelector('.characters').addEventListener('click', characterButton)
document.querySelector('.episodes').addEventListener('click', episodeButton)