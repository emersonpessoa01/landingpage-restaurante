let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarNav.classList.toggle("active");
};

const getJson = async () => {
  try {
    let url = "http://localhost:3000/api/data";
    let response = await fetch(url);
    let json = await response.json();
    let produtos = json.produtos;

    produtos.forEach(item => {
      let card = document.createElement("div");
      card.className = "card";
      
      // Transformando o caminho relativo em absoluto
      let imagePath = `http://localhost:3000${item.special_image.replace('./', '/')}`;
      
      card.innerHTML = `
        <img src="${imagePath}" class="card-img-top" alt="${item.name_client}">
        <div class="card-body">
          <h5 class="card-title">${item.name_client}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      `;
      document.querySelector("#container-home").appendChild(card);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

getJson();

