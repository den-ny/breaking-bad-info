let homeButton = function () {
  document.location = "index.html"
}

document.querySelector('.home').addEventListener('click', homeButton)

const form = document.querySelector('form')

let url = "https://breakingbadapi.com/api/characters"

fetch(url)
  .then(response => response.json())
  .then(response => {
    for (let index = 0; index < response.length; index++) {
      document.querySelector(`.default`).innerHTML +=
        `<div>${response[index].name}<br>
          <div class ="image-container">
            <img src= ${response[index].img} alt="${response[index].name}">
            </img></div>
          Status: ${response[index].status}
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
    .then(x => {
      for (let i = 0; i < x.length; i++) {
        document.querySelector('.search').innerHTML +=
          `<div>${x[i].name}<br>
          <div class ="image-container">
            <img src= ${x[i].img} alt="${x[i].name}">
            </img></div>
          Status: ${x[i].status}
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