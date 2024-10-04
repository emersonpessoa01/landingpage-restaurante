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
    // console.log(json.produtos);
    let produtos = json.produtos;
    produtos.forEach(item=>{
      // console.log(item)
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.special_image}" class="card-img-top" alt="${item.name_client}">
        <div class="card-body">
          <h5 class="card-title">${item.name_client}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      `;
      document.querySelector("#container-home").appendChild(card);
    })
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getJson();
