const works = [
  
];

/*
container.innerHTML = jsonData.map(item => `
  <div class="card">
    <h2>${item.Name}</h2>
    <p><${item.Author}</p>
    <p>${item.Country}</p>
    <p>${item.Date}</p>
  </div>
`).join('');
*/

document.getElementById('copyright-year').textContent = new Date().getFullYear();

