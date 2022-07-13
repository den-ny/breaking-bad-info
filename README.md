# Project Overview

## Project Name

Breaking Bad Info

## Project Description

Application to search characters and episode titles for the Breaking Bad television show.

## API and Data Sample
<ul>
    <li>Characters API: https://breakingbadapi.com/api/characters</li>
    <li>Characters in Episode API: https://www.breakingbadapi.com/api/episodes</li>
    <li>Episodes Information API: https://api.tvmaze.com/shows/169/episodes</li>
</ul>

```
[
    {
        "char_id": 6,
        "name": "Marie Schrader",
        "birthday": "Unknown",
        "occupation": [
            "Housewife",
            "Clepto"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
        "status": "Alive",
        "nickname": "Marie",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Betsy Brandt",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    }
]
```
## Wireframes
### Desktop
<h5>Home Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/frontpage.png" width="70%"> 
<h5>Characters Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/characters-page.png" width="70%">
<h5>Episodes Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/episodes-page.png" width="70%">

### Mobile
<h5>Mobile Home Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/mobile-home-page.png" width="50%"> 
<h5>Mobile haracters Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/mobile-character.png" width="50%">
<h5>Mobile Episodes Page</h5>
<img src = "https://github.com/den-ny/breaking-bad-info/blob/main/wireframe-images/mobile-episode.png" width="50%">

### MVP/PostMVP
#### MVP 
- Search for characters by name, episodes by title
- View all characters still alive or dead

#### PostMVP  
- Add description and image for episodes with second API
- When character image is clicked, redirects user to wikipedia page for actor

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 22| Prompt / Wireframes / Timeframes | Complete
|June 23| Project Approval | Complete
|June 24| Core Application Structure (HTML, CSS, etc.) | Complete
|June 25| Pseudocode / actual code | Complete
|June 26| MVP | Complete
|June 27| Post-MVP| Complete
|June 28| Presentations | Complete

## Code Snippet
```
if (tempClassName[tempClassName.length - 1] == r[i].season) {
  document.querySelector(`.s${r[i].season}`).innerHTML +=
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
```
