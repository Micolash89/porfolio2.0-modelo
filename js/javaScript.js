(() => {

    const copyButton = document.querySelector(".home__email");

    const copyButton2 = document.querySelector(".ri-file-copy-line");

    const copyButtonOk = document.querySelector('.copyButtonOk');

    const email = document.querySelector('.home__email span').textContent;

    copyButton.addEventListener('click', () => {
        copyButton2.style.display = 'none';
        copyButtonOk.style.display = 'inline-flex';

        navigator.clipboard.writeText(email.trim());

        setTimeout(() => {
            copyButton2.style.display = 'inline-flex';
            copyButtonOk.style.display = 'none';
        }, 1500);

    })

    /*slide technology*/

    let copy = [];

    document.querySelectorAll(".about__skills-content").forEach(e => copy.push(e.cloneNode(true)));

    document.querySelectorAll(".about__skills").forEach((e, i) => e.appendChild(copy[i]));


    /*slide porfolio*/

    let copy2 = [];

    document.querySelectorAll(".work__imgCarrousel").forEach(e => copy2.push(e.cloneNode(true)));

    document.querySelectorAll(".work__imgContainerCarrousel").forEach((e, i) => e.appendChild(copy2[i]));

    /* button home */

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    /*header*/

    const bgHeader = () => {
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        this.scrollY >= 50 ? header.classList.add('bg-header')
            : header.classList.remove('bg-header')
    }
    window.addEventListener('scroll', bgHeader)

    /* menu */

    const menu = document.querySelector('.header__nav');
    const menuButton = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.add('menu-show')
        closeMenu.style.display = "inline-block";
        menuButton.style.display = "none";
        menu.classList.add('menu-show');
    });

    // closeMenu.addEventListener('click', (e) => {

    //     if (e.target == closeMenu) {
    //         closeMenu.style.display = "none";
    //         menuButton.style.display = "inline-block";
    //         menu.classList.remove('menu-show')
    //         console.log("click");
    //     }
    // });

    menuButton.addEventListener('mouseleave', () => {

        closeMenu.style.display = "none";
        menuButton.style.display = "inline-block";
        menu.classList.remove('menu-show')
        console.log("mouseleave");
    });

    /*pdf frame position absolute , scroll top en document .pfd-view 
    // CERRAR EL MODAL HACIENDO CLICK ENCERRRAR
  
    document.querySelector('.modal-image .close').onclick = () => {
        document.querySelector('.modal-image').style.display = 'none';
        document.body.classList.remove("no-scroll"); // Habilitar scroll
    };

    // CERRAR EL MODAL HACIENDO CLICK FUERA DE LA IMAGEN
    document.querySelector('.modal-image').addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-image')) {
            document.querySelector('.modal-image').style.display = 'none';
            document.body.classList.remove("no-scroll"); // Habilitar scroll
        }
    });
   
    */

    // ABRIR RESUMEN MODAL  ver solo con estas lineas de codigo .pfd-view {

    const resumenBtn = document.querySelector('.home__downloadButton');
    const resumenModal = document.querySelector('.pfd-view');
    const resumenClose = resumenModal.querySelector('.close-button');

    resumenBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
        resumenModal.style.display = 'block';
        document.body.classList.add("no-scroll"); // Deshabilitar scroll
    });

    resumenClose.addEventListener('click', () => {
        resumenModal.style.display = 'none';
        document.body.classList.remove("no-scroll");
    });

    resumenModal.addEventListener('click', (event) => {
        if (event.target === resumenModal) {
            resumenModal.style.display = 'none';
            document.body.classList.remove("no-scroll"); // Habilitar scroll
        }
    });

})();