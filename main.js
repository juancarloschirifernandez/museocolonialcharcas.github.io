// Elementos
const progressBar = document.querySelector('.progress-bar');

// Cuando se hace scroll
window.onscroll = () => {

  // Cálculo
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  // Asignar ancho como porcentaje scroll
  progressBar.style.width = scrolled + '%';

};

document.addEventListener("DOMContentLoaded", function () {
  const video = document.createElement("video");
  video.src = "/vid/museoyt.mp4";

  video.currentTime = 2;
  video.loop = true;

  // Añadir clases de Tailwind CSS
  video.classList.add("w-full", "h-full", "sm:w-192", "sm:h-192", "md:w-4/3", "md:h-4/3", "lg:w-full", "lg:h-full");

  video.style.objectFit = "cover";
  video.style.position = "absolute";
  video.style.opacity = "0.6";
  video.style.zIndex = "-1";
  video.muted = true;
  video.controls = false;
  video.oncontextmenu = () => false;
  video.style.pointerEvents = "none";

  const hero = document.getElementById("hero");

  // Verificar que hero exista antes de anexar el video
  if (hero) {
    // Evento para reproducir el video cuando esté completamente cargado
    video.addEventListener("loadedmetadata", function () {
      video.play();
    });

    hero.appendChild(video);
  }
});




// Función para mostrar modal de contacto
function showContact() {
  const container = document.createElement("div");
  container.style.position = "fixed";

  const innerContainer = document.createElement("div");
  innerContainer.style.position = "absolute";
  container.appendChild(innerContainer);

  let contactInfo = document.createElement("div");
  contactInfo.id = "contactInfo";
  contactInfo.classList.add(
    "fixed",
    "inset-0",
    "flex",
    "justify-center",
    "items-center",
    "z-50"
  );

  let overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("fixed", "inset-0", "bg-black", "opacity-30", "z-20");

  contactInfo.innerHTML = `
  <div class="contact-modal bg-white p-4 rounded shadow">

  <iframe class="w-full h-48 border-2 border-gray-300 rounded mb-4" width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-65.26126474142076%2C-19.051581547632818%2C-65.2568954229355%2C-19.049236386636437&amp;layer=mapnik&amp;marker=-19.05040897127791%2C-65.25908008217812" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=-19.05041&amp;mlon=-65.25908#map=19/-19.05041/-65.25908">Ver el mapa más grande</a></small>

  <h3 class="text-lg font-bold mb-2">Contacto</h3>   

  <p class="text-gray-700">
    <strong class="font-medium">Teléfono:</strong> +593 987654321
  </p>

  <p class="text-gray-700">
    <strong class="font-medium">Dirección:</strong> Av. Siempre Viva 123
  </p>

  <button 
    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    id="close" 
    onclick="CloseModal()"
  >
    Cerrar
  </button>

</div>
`;


  container.appendChild(overlay);
  container.appendChild(contactInfo);

  document.body.appendChild(container);
}

function CloseModal() {
  let overlay = document.getElementById("overlay");
  let contactInfo = document.getElementById("contactInfo");

  overlay.remove();
  contactInfo.remove();
}
//https://www.boutiquesdemusees.fr/fr/boutique/musees/musee-du-louvre/?par=2
