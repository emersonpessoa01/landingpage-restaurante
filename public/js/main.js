let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarNav.classList.toggle("active");
};

const getJson = async () => {
  try {
    let url = `https://landingpage-ecommerce-three.vercel.app/api/data`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);

    // let home = renderHome(json);
    // let containerHome = document.getElementById("containerr-home");
    // containerHome.innerHTML = home;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getJson();

const renderHome = (json) => {
  let home = "";
  json.forEach((element) => {
    home += `
    <div class="swiper default-carousel swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="bg-indigo-50 h-96 flex justify-center items-center">
                <img src="./image/curso1.avif" alt="Slide 1" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4 lg:justify-start justify-center">
            <!-- Botão esquerdo -->
            <button
              id="slider-button-left"
              class="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-10 h-10 transition-all duration-500 rounded-full top-2/4 translate-y-1/2 left-5 hover:bg-indigo-600"
              data-carousel-prev
            ></button>

            <!-- Botão direito -->
            <button
              id="slider-button-right"
              class="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-5 h-5 transition-all duration-500 rounded-full top-2/4 translate-y-1/2 right-5 hover:bg-indigo-600"
              data-carousel-next
            ></button>
          </div>

          <div class="swiper-pagination"></div>
        </div>`;
  });
  return home;
};
