let home = function () {
  console.log(document.location = "index.html")
}

let form = document.querySelector('form')
// const url = "https://www.breakingbadapi.com/api/episodes?series=breaking%20bad"
let url2 = "https://api.tvmaze.com/shows/169/episodes"

fetch(url2)
  .then(response => response.json())
  .then(x => {
    for (let i = 0; i < x.length; i++)
      document.querySelector('.all').innerHTML +=
        `<div class ="episode${i + 1}"> ${x[i].name} :  Season: ${x[i].season} Episode: ${x[i].number} <br>
        <img src="${x[i].image.medium}"></img> ${x[i].summary}
        </div><span>___________________________</span>`
  })

let clear = function () {
  let d = document.querySelectorAll('div')
  for (let i = 0; i < d.length; i++) {
    d[i].innerHTML = ""
  }
}

let search = function (event) {
  clear()
  event.preventDefault()

  let value = document.querySelector('form').elements[0].value.toLowerCase()
  fetch(url2)
    .then(response => response.json())
    .then(x => {
      for (let i = 0; i < x.length; i++) {
        if (x[i].name.toLowerCase().indexOf(value) !== -1)
          document.querySelector('.search').innerHTML += `<div class ="episode${i + 1}"> ${x[i].name} :  Season: ${x[i].season} Episode: ${x[i].number} <br>
          <img src="${x[i].image.medium}"></img> ${x[i].summary}
          </div><span>___________________________</span>`
      }
    }
    )
}

form.addEventListener('submit', search)
let seasons = document.querySelectorAll('button');


let season = function (event) {
  clear()
  let qq = event.target.className

  fetch(url2)
    .then(response => response.json())
    .then(x => {
      for (let i = 0; i < x.length; i++) {
        if (qq[qq.length - 1] == x[i].season) {
          document.querySelector(`.s${x[i].season}`).innerHTML +=
            `<div class ="episode${i + 1}"> ${x[i].name} :  Season: ${x[i].season} Episode: ${x[i].number} <br>
          <img src="${x[i].image.medium}"></img> ${x[i].summary}
          </div><span>___________________________</span>`
        }
        else {
          document.querySelector(`.s${x[i].season}`).innerHTML = ""
        }
      }
    })
}

for (let i = 1; i < seasons.length; i++) {
  seasons[i].addEventListener('click', season)
}