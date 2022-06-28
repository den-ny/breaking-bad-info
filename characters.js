let homeButton = function () {
  document.location = "index.html"
}

document.querySelector('.home').addEventListener('click', homeButton)

const form = document.querySelector('form')

let url = "https://breakingbadapi.com/api/characters"

fetch(url)
  .then(response => response.json())
  .then(r => {
    for (let i = 0; i < r.length; i++) {
      document.querySelector(`.default`).innerHTML +=
        `<div>${r[i].name}<br>
          <div class ="image-container">
            <a href="https://en.wikipedia.org/wiki/${r[i].portrayed}" target="_blank" rel="noopener noreferrer">
            <img src= ${r[i].img} alt="${r[i].name}"></img></a>
          </div>
          Status: ${r[i].status}
        </div>`
    }
  })

let showDefault = function () {
  document.querySelector('.default').style.display = `grid`
}

let clearSearch = function () {
  document.querySelector('.search').innerHTML = ""
}

let handleSubmit = function (event) {
  document.querySelector('.default').style.display = `none`
  document.querySelector('.search').innerHTML = ""

  event.preventDefault();

  let value = document.querySelector('form').elements[0].value
  let modifiedUrl = url + `?name=${value}`

  fetch(modifiedUrl)
    .then(response => response.json())
    .then(r => {
      for (let i = 0; i < r.length; i++) {
        document.querySelector('.search').innerHTML +=
          `<div>${r[i].name}<br>
            <div class ="image-container">
              <a href="https://en.wikipedia.org/wiki/${r[i].portrayed}" target="_blank" rel="noopener noreferrer">
              <img src= ${r[i].img} alt="${r[i].name}"></img></a>
            </div>
            Status: ${r[i].status}
          </div>`
      }
    })
}

let deadButton = function () {
  clearSearch()
  showDefault()
  let profile = document.querySelectorAll('.default > div')

  for (let index = 0; index < profile.length; index++) {
    if (profile[index].innerText.search(/alive/i) !== -1)
      profile[index].style.display = "none"
    else
      profile[index].style.display = "grid"
  }
}

let aliveButton = function () {
  clearSearch()
  showDefault()
  let profile = document.querySelectorAll('.default > div')

  for (let index = 0; index < profile.length; index++) {
    if (profile[index].innerText.search(/decease|dead/i) !== -1)
      profile[index].style.display = "none"
    else
      profile[index].style.display = "grid"
  }
}

let resetButton = function () {
  clearSearch()
  showDefault()
  let profile = document.querySelectorAll('.default > div')

  for (let index = 0; index < profile.length; index++) {
    profile[index].style.display = "grid"
  }
}

form.addEventListener('submit', handleSubmit)
document.querySelector('.alive').addEventListener('click', aliveButton)
document.querySelector('.dead').addEventListener('click', deadButton)
document.querySelector('.reset').addEventListener('click', resetButton)