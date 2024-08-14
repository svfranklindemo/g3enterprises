export default async function decorate(block) {

  if(window.location.href.includes("/content/")) return block;
/*
  await loadScript('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js');
  await loadCSS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css');*/

  const slideList = [...block.querySelectorAll(':scope > div')].map(el => {
    return `<li class="splide__slide">
                <div class="splide__slide__container">
                    <div class="slide__content">${el.innerHTML}</div>
                </div>
            </li>`
  });

  block.innerHTML = `<div class="splide" aria-label="Beautiful Images" data-splide='{"type":"loop", "autoplay": false, "perPage":4}'>
    <div class="splide__track">
        <ul class="splide__list">
            ${slideList.join("")}
        </ul>
    </div>
    <!--<div class="splide__progress">
        <div class="splide__progress__bar"></div>
    </div>-->
</div>`;

  new Splide( block.querySelector('.splide') ).mount();
}
