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
        const backgroundFixedNav = `fixed right-0 bg-orange-400 h-full w-40 fade-in-left-bar z-20`
        const customContent = `
                <div class="relative ">
                <div class="fixed top-0 right-0 z-20">
                <ul class="absolute grid justify-items-center top-20 right-9">
                    <li class=" fade-in-left-menu text-white"><a href="#home">HOME</a></li>
                    <li class=" pt-10 fade-in-left-menu text-white"><a href="#about">ABOUT</a></li>
                    <li class=" pt-10 fade-in-left-menu text-white"><a href="#skills">SKILLS</a></li>
                    <li class=" pt-10 fade-in-left-menu text-white"><a href="#contact">CONTACT</a></li>
                    <li class=" pt-10 fade-in-left-menu text-white"><a href="#proyectos">PROYECTOS</a></li>
                </ul>
                </div>
                </div>
        `;
        menuVertical.innerHTML = customContent;
        backgroundFixed.className = backgroundFixedNav;
    } else {
        const backgroundFixedNav = `fixed right-0 bg-orange-400 h-full w-40 fade-out z-20`
        const customContent = `
                <div class="relative ">
                <div class="fixed top-0 right-0 z-20">
                <ul class="absolute grid justify-items-center top-20 right-9">
                    <li class=" fade-out text-white"><a href="#home">HOME</a></li>
                    <li class=" pt-10 fade-out text-white"><a href="#about">ABOUT</a></li>
                    <li class=" pt-10 fade-out text-white"><a href="#skills">SKILLS</a></li>
                    <li class=" pt-10 fade-out text-white"><a href="#contact">CONTACT</a></li>
                    <li class=" pt-10 fade-out text-white"><a href="#proyectos">PROYECTOS</a></li>
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
        const backgroundFixedNav = `fixed bg-gray-600 height_fixed w-screen fade-in-left-bar z-10`
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
