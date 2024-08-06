(() => {

    /*slide technology*/

    // const copy = document.querySelector(".about__skills-content").cloneNode(true)

    // document.querySelector(".about__skills").appendChild(copy);

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