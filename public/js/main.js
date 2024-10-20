// Função para buscar os dados da API
const getJson = async () => {
  try {
    const baseURL = window.location.hostname === "localhost" ? "http://localhost:3000" : "https://landingpage-restaurante-three.vercel.app";

    const url = `${baseURL}/api/data/`;
    const response = await fetch(url);
    const { produtos } = await response.json();
    console.log(produtos);
    renderProducts(produtos);
    renderAbout(produtos);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

// Executa a função de busca de dados
getJson();

// ====================== Função para renderizar os produtos da Section Home================
const renderProducts = (produtos) => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // Percorre cada produto na lista de produtos
  produtos.forEach((produto) => {
    // Acessa o conteúdo de cada slide dentro da seção "home"
    const slides = produto.home;

    // Itera sobre os slides (slide1, slide2, slide3, etc.)
    Object.values(slides).forEach((slide) => {
      const getSlide = `
        <div class="swiper-slide">
          <div class="bg-indigo-50 h-96 flex justify-center items-center relative">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col justify-center items-center">
              <h2
                class="text-white font-bold text-center lg:w-1/2 mb-4"
                style="font-size: clamp(1.5rem, 5vw, 3rem)"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                ${slide.description}
              </h2>
              <a
                href="#contact"
                class="bg-red-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-500 transition duration-300 hover:no-underline lowercase first-letter-uppercase"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      `;
      swiperWrapper.innerHTML += getSlide;
    });
  });
};

// Função para renderizar a seção "Sobre"
const renderAbout = (produtos) => {
  const aboutSection = document.getElementById("about");

  // Limpa a seção "Sobre" para evitar duplicações
  aboutSection.innerHTML = '';

  // Cria o título da seção
  const titleHTML = `
    <h2 class="text-center text-3xl bordered-title mb-10">
      Sobre
      <span class="text-danger bordered-title p-0 m-0 font-bold">Nós</span>
    </h2>
  `;
  aboutSection.innerHTML += titleHTML;

  // Itera pelos produtos para preencher a seção "Sobre"
  produtos.forEach((produto) => {
    const historia = produto.about; // Supondo que sua API retorna a história
    const valores = produto.about.our_values; // Supondo que sua API retorna os valores
    const equipe = produto.about.our_team; // Supondo que sua API retorna a equipe
    const cta = produto.about.cta

  

    // Adiciona a história
    const historiaHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center mb-16">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">
          <img src="${historia.team_cooks}" alt="Equipe Sabores Autênticos na cozinha" class="rounded-lg shadow-lg" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800">
          <h2 class="text-3xl font-bold mb-4">${historia.title}</h2>
          <p class="text-gray-700 mb-4 first-letter-uppercase lowercase">
            ${historia.paragraph1}
          </p>
          <p class="text-gray-700 mb-4 first-letter-uppercase lowercase">
             ${historia.paragraph2}
          </p>
        </div>
      </div>
    `;
    aboutSection.innerHTML += historiaHTML;

    // Adiciona os valores
    const valoresHTML = `
      <div class="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${valores.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h3 class="text-xl font-bold text-green-700 mb-2">${valores.value1.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value1.description}
            </p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <h3 class="text-xl font-bold mb-2">${valores.value2.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value2.description}
            </p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <h3 class="text-xl font-bold text-green-700 mb-2">${valores.value3.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value3.description}
            </p>
          </div>
        </div>
      </div>
    `;
    aboutSection.innerHTML += valoresHTML;

    // Adiciona a equipe
    
    const equipeHTML = `
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${equipe.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="600"
          >
            <img src="${equipe.team1.image}" alt="Chef Maria Silva" class="w-full h-64 object-cover" width="300" height="300" />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">${equipe.team1.name}</h3>
              <p class="text-gray-600 mb-2">${equipe.team1.role}</p>
              <p class="text-gray-700 lowercase first-letter-uppercase">
                ${equipe.team1.description}
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="800"
          >
            <img src="${equipe.team2.image}" alt="Chef João Santos" class="w-full h-64 object-cover" width="300" height="300" />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">${equipe.team2.name}</h3>
              <p class="text-gray-600 mb-2">${equipe.team2.role}</p>
              <p class="text-gray-700 lowercase first-letter-uppercase">
                 ${equipe.team2.description}
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1000"
          >
            <img
              src="${equipe.team3.image}"
              alt="Nutricionista Ana Oliveira"
              class="w-full h-64 object-cover"
              width="300"
              height="300"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">${equipe.team3.name}a</h3>
              <p class="text-gray-600 mb-2">${equipe.team3.role}</p>
              <p class="text-gray-700 lowercase first-letter-uppercase">
              ${equipe.team3.description}
              </p>
            </div>
          </div>
      </div>
    `;
    aboutSection.innerHTML += equipeHTML;

    // Adiciona a seção "Junte-se a Nós"
    const junteSeHTML = `
      <div class="bg-red-100 rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-6 text-center lowercase first-letter-uppercase" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${cta.title}</h2>
        <p class="text-gray-700 text-center mb-6 lowercase first-letter-uppercase" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
         ${cta.description}
        </p>
        <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1400">
          <a href="#contact" class="bg-red-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-500 transition duration-300 hover:no-underline lowercase first-letter-uppercase">Entre em Contato</a>
        </div>
      </div>
    `;
    aboutSection.innerHTML += junteSeHTML;
  });
};


/* Data e hora corrente 
function updateDateTime() {
  const now = new Date();
  const formattedDateTime = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("current-date-time").innerText = formattedDateTime;
}

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Atualiza imediatamente ao carregar a página
updateDateTime(); */
