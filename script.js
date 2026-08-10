const works = [

];

const container = document.querySelector('.container');

if (works.length != 0){
const newHTML = works.map(item => `
    <div class="card">
      <img src="${item.image}" />
      <p class="workInfo workName"><strong>${item.name}</strong></p>
      <p class="workInfo">${item.author}</p>
      <p class="workInfo">${item.country}</p>
      <p class="workInfo">${item.year}</p>
    </div>
  `).join('');
container.innerHTML = newHTML;
}

document.getElementById('copyright-year').textContent = new Date().getFullYear();

