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

})();