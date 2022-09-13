let destacadas = document.getElementById("masDestacadas");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      let card = document.createElement("div");
      card.innerHTML = `
    <div class="contenedor">
      
      <div class="gridImgDestacada">
        <img src=${el.img}>
      </div>

      <div class="gridInfoDestacada">
        <h3>${el.nombre} <span class="txtGreen">${el.zona}</span></h3>
        <div class="masContacto">
          <p>Teléfono: ${el.telefono}</p> 
          <p>${el.horario}</p>
        </div>
        <h4><span class="txtGreen">${el.titular}</span></h4> 
        <p class="descripcion">${el.descripcion}<p>
      </div>

      <div class="gridWA">
        <a target="_blank" href="${el.btWhatsapp}">
          <button class="btnWA"><img src="./img/whatsappx16.png">Whatsapp</button>
        </a>
      </div>

    </div>`;
      destacadas.appendChild(card);
    });
  });
