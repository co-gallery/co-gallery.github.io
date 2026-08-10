const works = [
  
];

/*
container.innerHTML = works.map(item => `
  <div class="card">
    <img src=${item.Image}></img>
    <p><strong>${item.Name}</strong></p>
    <p><${item.Author}</p>
    <p>${item.Country}</p>
    <p>${item.Date}</p>
  </div>
`).join('');
*/

document.getElementById('copyright-year').textContent = new Date().getFullYear();

