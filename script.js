const works = [
  
];

/*
if (!works.length){
container.innerHTML = works.map(item => `
  <div class="card">
    <img src=${item.Image}></img>
    <p class="workInfo"><strong>${item.Name}</strong></p>
    <p class="workInfo"><${item.Author}</p>
    <p class="workInfo">${item.Country}</p>
    <p class="workInfo">${item.Date}</p>
  </div>
`).join('');
}
*/

document.getElementById('copyright-year').textContent = new Date().getFullYear();

