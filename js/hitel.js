function kieg(){
    let kiegAr = 0;

    for (let i = 0; i < 5; i++) {
        let vizsgalt = document.getElementsByName(`kieg`)[i];
        if (vizsgalt.checked) {
            if (vizsgalt.id == "c" ) {
                kiegAr += 350000;
            }
            else if (vizsgalt.id == "h" ) {
                kiegAr += 100000;
            }
            else if (vizsgalt.id == "e" ) {
                kiegAr += 50000;
            }
            else if (vizsgalt.id == "ne" ) {
                kiegAr += 40000;
            }
            else if (vizsgalt.id == "na" ) {
                kiegAr += 20000;
            }
        }
    }

    return kiegAr;
}


let aktiv = null;
function kivalasztott(button){
    aktiv = button;
}


function hitel(){
    
    let autoAra = 25000000;

    autoAra -= parseInt(document.getElementsByName("megtakaritas")[0].value);

    honap = parseInt(document.getElementById("ho").value);
    let rata = 0.05;

    if (honap<25 && honap>=12 ) {
        rata = 0.1;
    } 
    else if (honap<50 && honap>=25) {
        rata = 0.15;
    }
    else if (honap<100 && honap>=50) {
        rata = 0.2;
    }
    else{
        rata = 0.25;
    }

    let kiegVegosszeg = kieg();

    let szinVegosszeg = 0;
    if (aktiv !== null && aktiv.value !== "feher") {
        szinVegosszeg += 300000;
    }
    
    autoAra += kiegVegosszeg;
    autoAra += szinVegosszeg;


    let haviTorlesztes = Math.round((autoAra + autoAra*rata)/honap);
    haviTorlesztes = "Eredmény: " + haviTorlesztes.toString() + " Ft/Hó"
    document.getElementById("htr").innerHTML = haviTorlesztes
    }
    