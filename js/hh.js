document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    // Verifica se a página foi rolada mais do que 50 pixels
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});


// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão pelo seu atributo class
  var toggler = document.querySelector('.navbar-toggler');

  // Adiciona um ouvinte de evento de clique ao botão
  toggler.addEventListener('click', function() {
    // Seleciona o elemento navbar pelo seu atributo class
    var navbar = document.getElementById('navbar');

    // Verifica se a classe 'nova-classe' já existe
    if (navbar.classList.contains('put-bg-nav')) {
      // Remove a classe, se já existir
      navbar.classList.remove('put-bg-nav');
    } else {
      // Adiciona a classe 'nova-classe' se não existir
      navbar.classList.add('put-bg-nav');
    }
  });
});

// Video modal
document.addEventListener('DOMContentLoaded', function () {
  var myModal = document.getElementById('dashboardModal');
  var videoIframe = document.getElementById('videoIframe');
  var videoSrc = videoIframe.src; // Original src

  myModal.addEventListener('shown.bs.modal', function () {
      videoIframe.src = videoSrc + '?autoplay=1'; // Add autoplay when modal is shown
  });

  myModal.addEventListener('hide.bs.modal', function () {
      videoIframe.src = ""; // Stop the video
      videoIframe.src = videoSrc; // Reset the src
  });
});