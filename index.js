const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

let slideAtual = 0;


function atualizarSlider() {
      slides.forEach(slide => slide.style.display = 'none');

      slides[slideAtual].style.display = 'flex';


    if (slideAtual === 0) {
        setaEsquerda.classList.add('desativada');
    } else {
        setaEsquerda.classList.remove('desativada');
    }


    if (slideAtual === slides.length - 1) {
        setaDireita.classList.add('desativada');
    } else {
        setaDireita.classList.remove('desativada');
    }
}

setaEsquerda.addEventListener('click', () => {
    if (slideAtual > 0) {
        slideAtual--;
        atualizarSlider();
    }
});

setaDireita.addEventListener('click', () => {
    if (slideAtual < slides.length - 1) {
        slideAtual++;
        atualizarSlider();
    }
});

atualizarSlider();

