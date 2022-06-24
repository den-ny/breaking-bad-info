let home = function () {
  console.log(document.location = "index.html")
}

document.querySelector('.home').addEventListener('click', home)

const form = document.querySelector('form')

let url = "https://breakingbadapi.com/api/characters"

fetch(url)
  .then(response => response.json())
  .then(x => {
    for (let i = 0; i < x.length; i++) {
      document.querySelector('.default').innerHTML +=
        `<div>${x[i].name}<br>
          <img src= ${x[i].img} alt="${x[i].name}" width="20%"></img>
          <p>Status: ${x[i].status}</p>
        </div>
        <span></span>`
    }
  })

let show = function () {
  document.querySelector('.default').style.display = `block`
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
            <img src= ${x[i].img} alt="${x[i].name}" width="20%"></img>
            <p>Status: ${x[i].status}</p>
          </div>
          <span></span>`
      }
    })
}


let dead = function () {
  show()
  let profile = document.querySelectorAll('.default > div')
  for (let i = 0; i < profile.length; i++) {
    if (profile[i].innerText.search(/alive/i) !== -1)
      profile[i].style.display = "none"
    else
      profile[i].style.display = "block"
  }
}

let alive = function () {
  show()
  let profile = document.querySelectorAll('.default > div')

  for (let i = 0; i < profile.length; i++) {
    if (profile[i].innerText.search(/decease|dead/i) !== -1)
      profile[i].style.display = "none"
    else
      profile[i].style.display = "block"
  }
}

let reset = function () {
  let profile = document.querySelectorAll('.default > div')
  for (let index = 0; index < profile.length; index++) {
    profile[index].style.display = "block"
  }
}

form.addEventListener('submit', handleSubmit)
document.querySelector('.alive').addEventListener('click', alive)
document.querySelector('.dead').addEventListener('click', dead)
document.querySelector('.reset').addEventListener('click', reset)