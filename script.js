const work_link = document.querySelector(".work_link")
const contact_link = document.querySelector(".contact_link")

ScrollReveal({ reset: true,
distance: '60px',
duration: 2500,

});

ScrollReveal().reveal('.bio_text', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.bio_content_socials', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.title_text', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.reveal-1, .reveal-2, .reveal-3, .reveal-4, .reveal-5', {delay: 600, origin: 'bottom'});

work_link.addEventListener("click", () => {
    let e = document.querySelector(".portfolio_works");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
})
contact_link.addEventListener("click", () => {
    let e = document.querySelector(".contact");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
})







