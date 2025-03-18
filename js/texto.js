const text = "¡Hola, soy RMceta!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("presentacion").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);

    }
}

typeEffect();
