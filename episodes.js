let home = function () {
  document.location = "index.html"
}

document.querySelector('.home').addEventListener('click', home)

let form = document.querySelector('form')
const onlyBreakingBadEpisodes = "https://www.breakingbadapi.com/api/episodes?series=breaking%20bad"
let episodeInfoUrl = "https://api.tvmaze.com/shows/169/episodes"
let episodeCharacterUrl = "https://www.breakingbadapi.com/api/episodes"

fetch(episodeInfoUrl)
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++)
      document.querySelector('.default').innerHTML +=
        `<div class ="episode${i + 1}">
          <p>${response[i].name} : Season: ${response[i].season} Episode: ${response[i].number}</p>
          <div class="ep${i + 1}-container"> 
            <div class ="image-container">
              <img src="${response[i].image.medium}"></img>
            </div>
            <div class="text${i + 1}-container">
              ${response[i].summary}
            </div>
          </div>
        </div>`
  })

fetch(onlyBreakingBadEpisodes)
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      let temp = response[i].characters
      for (let j = 0; j < temp.length; j++) {
        if (j == temp.length - 1)
          document.querySelector(`.text${response[i].episode_id}-container`).innerHTML += `${temp[j]}`
        else
          document.querySelector(`.text${response[i].episode_id}-container`).innerHTML += `${temp[j]}, `
      }
    }
  })

let clear = function () {
  let div = document.querySelectorAll('div')
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = ""
  }
}

let search = function (event) {
  clear()
  event.preventDefault()

  let value = document.querySelector('form').elements[0].value.toLowerCase()
  let query = []

  fetch(episodeInfoUrl)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        if (r[i].name.toLowerCase().indexOf(value) !== -1) {

          query.push(i + 1)

          document.querySelector('.search').innerHTML +=
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
                if (l === tempChar.length - 1)
                  document.querySelector(`.text${res[k].episode_id}-container`).innerHTML += `${tempChar[l]}`
                else
                  document.querySelector(`.text${res[k].episode_id}-container`).innerHTML += `${tempChar[l]}, `
              }
            }
          })
      }
    })
}

form.addEventListener('submit', search)
let seasons = document.querySelectorAll('button');


let seasonButton = function (event) {
  clear()
  let tempClassName = event.target.className

  fetch(episodeInfoUrl)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        if (tempClassName[tempClassName.length - 1] == r[i].season) {
          document.querySelector(`.s${r[i].season}`).innerHTML +=
            `<div class ="episode${i + 1}"> 
              <p>${r[i].name} : Season: ${r[i].season} Episode: ${r[i].number}</p>
              <div class="ep${i + 1}-container"> 
                <div class ="image-container">
                  <img src="${r[i].image.medium}"></img></div>
                <div class="text${i + 1}-container">
                  ${r[i].summary}</div>
              </div>
            </div>`
        }
        else {
          document.querySelector(`.s${r[i].season}`).innerHTML = ""
        }
      }
    })

  fetch(onlyBreakingBadEpisodes)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        let tempChar = r[i].characters

        if (tempClassName[tempClassName.length - 1] === r[i].season.split(' ').join('')) {
          for (let j = 0; j < tempChar.length; j++) {
            if (j === tempChar.length - 1) {
              document.querySelector(`.text${r[i].episode_id}-container`).innerHTML += `${tempChar[j]}`
            }
            else {
              document.querySelector(`.text${r[i].episode_id}-container`).innerHTML += `${tempChar[j]}, `
            }
          }
        }
      }
    })
}

for (let i = 1; i < seasons.length; i++) {
  seasons[i].addEventListener('click', seasonButton)
}