document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".pregunta-texto");
    const answers = document.querySelectorAll(".respuesta-texto");

    elements.forEach((el, index) => {
        let text = el.getAttribute("data-text");
        let i = 0;
        el.textContent = "";
        setTimeout(() => {
            let interval = setInterval(() => {
                el.textContent += text[i];
                i++;
                if (i === text.length) {
                    clearInterval(interval);
                    
                    setTimeout(() => {
                        answers[index].classList.add("show");
                    }, 1000);
                }
            }, 50);
        }, index * 0);
    });
});
