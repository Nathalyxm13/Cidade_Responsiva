var data = [
    {
        img: "./foto 1.png" ,
        country: "Egito-Hurghada " ,
        place: "The makadi spa hotel" ,
        describe:"Situado em Hurghada, a 1,5 km da Praia Fort Arabesque, o The Makadi Spa Hotel - Couples Only 18 Years Plus disponibiliza acomodações com uma piscina exterior, estacionamento privado gratuito, um centro de fitness e um jardim. Cada acomodação deste resort de 5 estrelas oferece vistas para o jardim e os hóspedes podem desfrutar de acesso a um terraço e a um bar. A acomodação oferece recepção 24 horas, transfer (aeroporto), serviço de quarto e Wi-Fi gratuito." ,
    },
    {
        img: "./foto2.png" , 
        country: "Egito-Hurghada",
        place: "Red Sea resorts",
        describe: "Hurghada found on the western side of Egypt's Red Sea Riviera is a beach town resort stretching some 40km along Egypt’s Red Sea coast. It is the second biggest town on the Red Sea, renowned for scuba diving,  thanks to its beautiful coral reefs. " ,

    },
    {
        img: "./foto3.png",
        country: "Egito-Hurghada",
        place: "Piramides de Gizé",
        describe: "Admire relíquias do passado no Museu Egípcio e desfrute de um almoço. Após ser buscado em seu hotel, aprecie as belas vistas da paisagem no trajeto à capital egípcia.Atividades opcionais em Gizé mediante pagamento de uma tarifa adicional incluem uma visita ao interior da Grande Pirâmide ou Pequena Pirâmide, um passeio de camelo ou uma entrada no Museu do Barco Solar para conferir o lendário barco do faraó Quéops. ",

    },
    {
        img: "./foto7.webp",
        country:"Egito-Hurghada",
        place: "Cleopatra Makadi Bay Resort",
        describe: "O Cleopatra Makadi Bay Resort fica no Mar Vermelho, perto da cidade de Hurghada, à beira-mar em uma praia privativa. A propriedade dispõe de 8 piscinas ao ar livre, centro de mergulho no local, lojas, supermercado e um bazar.",

    },
    {
        img: "./foto8.webp",
        country: "Egito-Hurghada",
        place: "Hurghada Egito Nova branca de neve Mesquita",
        describe: "El Mina Al-Kabir é uma das mais famosas e fantásticas mesquitas e atracões turísticas significativas no The Governorate of The Red Sea Specific em Hurghada Se estiver interessado na cultura e arquitectura esta é a escolha certa a tomar.",
    }

];

    const introduce = document.querySelector("introduce")
    const ordinalNumber = document.querySelector(".ordinal-number")

    introduce.innerHTML = "";
    ordinalNumber.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        introduce.innerHTML += `
        <div class="wrapper">
        <span>
           <h5 class="country" style="--idx: 0">${data[i].country}</h5>
        </span>
        <span>
           <h1 class="place" style="--idx: 1">${data[i].place}</h1>
        </span>
        <span>
           <p class="describe" style="--idx: 2">${data[i].describe}</p>
        </span>
        <span>
           <button class="discover-button" style="--idx : 3">Discover now</button>
        </span>
       </div>
    `;
    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
    }
    introduce.children[0].classList.add("active");
    ordinalNumber.children[0].classList.add("active");

    const thumnbnailListWrapper = document.querySelector(
        ".thumbnail-list .wrapper"
    );
    thumnbnailListWrapper .innerHTML += `
        <div class="thumbnail zoom">
        <img src="${data[0].img}" alt="">
       </div>
    `;
   for (let i = 1; i <data.length; i++) {
       thumnbnailListWrapper.innerHTML += `
       <div class="thumbnail" style=--idx:${i-1}">
            <img src="${data[0].img}" alt="">
        </div>
       `;
   }
   
   const nextBtn = document.querySelector(".navigation .next-button");
   var currentIndex = 0;
   nextBtn.addEventListener("click" () =>{
    nextBtn.disabled = true;
    var clone = thumnbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbnailListWrapper.appendChild(clone);
    thumnbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumnbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    },1000);
    for (let i = 2; i < thumnbnailListWrapper.childElementCount; i++){
        thumnbnailListWrapper.children[i].style=`--idx:${i - 2}`;
    }
    for (let i = 2; 1 < thumnbnailListWrapper.childElementCount; i++) {
        thumnbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else currentIndex = 0;
    for (let i = 0; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0$ {currentIndex + 1}`;
});




