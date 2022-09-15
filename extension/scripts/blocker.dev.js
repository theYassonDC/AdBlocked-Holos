"use strict"
console.log("%cAD BLOCKED HABBO HOLOS v0.0.1.0", "color: #eee; font-size: 50px;", "\nBloqueador de anuncios de habbo hoteles por JuandaC extension en fase beta gracias por usarla! \n\n Mi github: https://github.com/theYassonDC\n Instagram: @ljuanda_castro");

function BlockedHolo(element){
    if(!element){
        console.log("%cBLOCKER ~", "color: yellow;","Public detected..");
    }else{
        element.hidden = true;
        document.body.removeChild(element);
        console.log("%cBLOCKER ~", "color: yellow;", " Hidden is true public!");
    }
};

// --> Kubbo.city and Hgalaxy.net ads
// let adbox = document.getElementById("AdBox2");
// let client_bannel = document.getElementById("client-banner");
// BlockedHolo(client_bannel);
// BlockedHolo(adbox);
