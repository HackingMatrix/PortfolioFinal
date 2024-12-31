const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const animado = document.getElementById('skills')

window.addEventListener("scroll", () => {
    console.log('estas haciendo scroll');
})

const text = "</Hi, I'm Omar>";
const textContainer = document.getElementById("text");
const cursor = document.querySelector(".cursor");
let index = 0;

function typeText() {
    textContainer.textContent += text[index];
    index++;

    if (index < text.length) {
        setTimeout(typeText, 100); // Cambia la velocidad de escritura aquí
    } else {
        startCursorAnimation();
        
    }
}

function startCursorAnimation() {
    cursor.style.animation = "cursor-blink 0.8s infinite";
}

setTimeout(typeText, 1000); 

const menuToggle = document.getElementById("menu-toggle");
const menuShow = document.getElementById("menu-show");
const menuVertical = document.getElementById("menu-vertical")
const backgroundFixed = document.getElementById("bg-fixed")

let isTextVisible = true;
let verticalVisible = true

menuToggle.addEventListener("click", () => {
    
    if (window.innerWidth <= 1200) {
        menuToggle.classList.toggle("vertical");
        if (verticalVisible) {
            const backgroundFixedNav = `fixed  w-full fade-in-down z-20 py-6`; // Eliminamos h-80 y agregamos py-6 para padding dinámico
            const customContent = `
                <div class="relative ">
                    <div class="fixed top-0 z-20 w-full bg-orange-400 fade-in-down py-6">
                        <ul class="flex flex-col items-center justify-center space-y-6">
                            <li class="fade-in-left-menu text-white"><a href="#home">HOME</a></li>
                            <li class="fade-in-left-menu text-white"><a href="#about">ABOUT</a></li>
                            <li class="fade-in-left-menu text-white"><a href="#skills">SKILLS</a></li>
                            <li class="fade-in-left-menu text-white"><a href="#contact">CONTACT</a></li>
                            <li class="fade-in-left-menu text-white"><a href="#proyectos">PROYECTOS</a></li>
                        </ul>
                    </div>
                </div>
            `;
            menuVertical.innerHTML = customContent;
            backgroundFixed.className = backgroundFixedNav;
            
    } else {
        const backgroundFixedNav = `fixed w-full fade-out-up z-20 py-6`;
        const customContent = `
                <div class="relative ">
                <div class="fixed top-0 z-20 w-full bg-orange-400 fade-out-up py-6">
                <ul class="flex flex-col items-center justify-center space-y-6">
                    <li class=" fade-out text-white"><a href="#home">HOME</a></li>
                    <li class=" fade-out text-white"><a href="#about">ABOUT</a></li>
                    <li class=" fade-out text-white"><a href="#skills">SKILLS</a></li>
                    <li class=" fade-out text-white"><a href="#contact">CONTACT</a></li>
                    <li class=" fade-out text-white"><a href="#proyectos">PROYECTOS</a></li>
                </ul>
                </div>
                </div>
        `;
        menuVertical.innerHTML = customContent;
        backgroundFixed.className = backgroundFixedNav;

        setTimeout(() => {
            menuVertical.innerHTML = "";
            backgroundFixed.className = "";
        }, 300); 
        }
    
        verticalVisible = !verticalVisible;
        
    }  
    
    if(window.innerWidth >= 1200) {
        menuToggle.classList.toggle("moved");
        if (isTextVisible) {
        const backgroundFixedNav = `fixed bg-orange-400 height_fixed w-screen fade-in-left-bar z-10`
        const customContent = `
                <div class="relative ">
                <div class="fixed top-3 right-16 z-20">
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#home">HOME</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#about">ABOUT</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#skills">SKILLS</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#contact">CONTACT</a></span></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#proyectos">PROJECTS</a></span>
                </div>
                </div>
        `;
        menuShow.innerHTML = customContent;
        backgroundFixed.className = backgroundFixedNav;
    } else {
        const backgroundFixedNav = `fixed bg-opacity-50 bg-gray-600 h-14 w-screen fade-out`

        const customContent = `
        <div class="relative ">
                <div class="fixed top-3 right-16 z-20 ">
                <span class="px-5 fade-out"><a href="#proyectos">HOME</a></span>
                <span class="px-5 fade-out"><a href="#proyectos">ABOUT</a></span>
                <span class="px-5 fade-out"><a href="#skills">SKILLS</a></span>
                <span class="px-5 fade-out">CONTACT</span>
                <span class="px-5 fade-out">PROJECTS</span>
                </div>
                </div>
                            `;
        backgroundFixed.className = backgroundFixedNav;
        menuShow.innerHTML = customContent;

        setTimeout(() => {
            menuShow.innerHTML = "";
            backgroundFixed.className = "";
        }, 300); 
        }
    
        isTextVisible = !isTextVisible;
        }
    
});

const elements = document.querySelectorAll('.fade-and-slide'); // Seleccionar todos los elementos

function handleScroll() {
    elements.forEach(element => { // Recorrer todos los elementos
        const rect = element.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Obtener el ancho final desde el atributo de datos
            const finalWidth = element.dataset.finalWidth;
            if (window.innerWidth <= 640) {
                element.style.width = `${(finalWidth) - 55}px`;
            } else {
                element.style.width = `${finalWidth}px`;
            }
            // Aplicar la animación de cambio de ancho
            
        } else {
            // Reiniciar el ancho cuando el elemento no está visible
            element.style.width = '0';
        }
    });
}

// Agrega un oyente de eventos de desplazamiento
window.addEventListener('scroll', handleScroll);

document.addEventListener("scroll", () => {
    const parallaxItems = document.querySelectorAll(".parallax-item");

    parallaxItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute("data-speed"));
        const offset = window.scrollY * speed;
        item.style.transform = `translateY(${offset}px)`;
    });
});

const rotators = document.querySelectorAll('.text-rotator');

rotators.forEach(rotator => {
    const texts = rotator.querySelectorAll('p');
    let currentIndex = 0;

    function rotateText() {
        // Ocultar todos los textos del rotador actual
        texts.forEach((text) => {
            text.classList.add('opacity-0');  // Ocultar texto
            text.classList.remove('opacity-100'); // Asegurarse de quitar cualquier visibilidad
        });

        // Mostrar el texto actual
        texts[currentIndex].classList.remove('opacity-0');
        texts[currentIndex].classList.add('opacity-100');

        // Pasar al siguiente texto
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Inicializar rotación para este rotador
    rotateText();
    setInterval(rotateText, 4000); // Cambiar texto cada 3 segundos
});

function toggleList(id) {
    // Obtener el elemento de la lista y el botón
    const list = document.getElementById(id);
    const button = document.getElementById(id + '-plus');
    
    // Alternar la visibilidad de la lista
    list.classList.toggle('hidden');
    
    // Cambiar el ícono del botón de "+" a "-" o viceversa
    if (list.classList.contains('hidden')) {
      button.textContent = '+';
    } else {
      button.textContent = '-';
    }
  }

  document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Correo enviado correctamente.");
      } else {
        alert("Error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el correo.");
    }
  });