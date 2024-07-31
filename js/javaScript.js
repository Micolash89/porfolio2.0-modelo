(() => {

    const copy = document.querySelector(".about__skills-content").cloneNode(true)

    document.querySelector(".about__skills").appendChild(copy);

    /*repetir para todos ver como hacerlo xd*/

    let copy2 = [];

    document.querySelectorAll(".work__imgCarrousel").forEach(e => copy2.push(e.cloneNode(true)));

    console.log(document.querySelectorAll(".work__imgCarrousel"));

    document.querySelectorAll(".work__imgContainerCarrousel").forEach((e, i) => e.appendChild(copy2[i]));

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

})();