"use strict";

function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {
    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    }

    if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper">Fortryd</button><button type="button" class="knapper">OK</button></div>';
    }
    modalindhold.innerHTML = dialogIndhold;
}

function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }

}

function aktiverTekstAnimation() {
    for (let i = 0; i <= tekstIdListe.length - 1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("roll-in-right");
        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("roll-in-right")
        }
    }
}

//Hovedprogramdel
const tekstIdListe = ["tekst1", "tekst2", "tekst3", "tekst4"];

window.addEventListener("scroll", function () {
    aktiverTekstAnimation();
    aktiverMultimedier();
});


function aktiverMultimedier() {
    for (let i = 0; i <= AVIdListe.length - 1; i++) {

        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }
    }
}

const AVIdListe = ["paris", "istanbul", "firenze", "video"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = new Audio("Bouncy_Fun_1.mp3");
AVIndholdsliste[1] = new Audio("Walker.mp3");
AVIndholdsliste[2] = new Audio("Funky_Groove.mp3");
AVIndholdsliste[3] = document.getElementById("video");






