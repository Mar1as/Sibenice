let pole = ["POPCORN","RIZEK","KURE","PIZZA","BRAMBORA","VOJTECH","OBAMA","DOUDA","LAPTOP","FREEZE","CYBERPUNK","MAFIA","TOM","VAVRA"];
const polePismeno = [];
let polePouzitychPismen = [];

let rnd;
let slovo;
let delka;
let jmeno;
let chyby = 0;
let jeTamXd;
let abc = "";

//VYTVOŘÍ SE HÁDANÉ SLOVO
function vytvoritSlovo() {
    polePouzitychPismen = [];
    abc = "";
    slovo = "";
    rnd = Math.floor(Math.random() * pole.length);
    jmeno = pole[rnd];
    delka = jmeno.length;
    polePismeno.length = delka;
    let a;

    for (let i = 0; i < delka; i++) {
        polePismeno[i] = "_ "
        slovo += polePismeno[i]; 
        abc += jmeno[i] + " ";

    }
    document.getElementById("hadaneSlovo").innerHTML = slovo;
    
    chyby = 0;
    document.getElementById("text1").innerHTML = "Počet chyb: " + chyby;
    document.getElementById("pouzita").innerHTML = "Použitá písmena: ";
    document.getElementById("gameOver").innerHTML = ""
    obrazek();
}

//TADY SE UJIŠŤUJE JESTLI JE PÍSMENO SPRÁVNĚ

//
function hadaneSlovo() {
    slovo = "";
    jeTamXd = 0;
    let pismeno = document.getElementById("text").value;

    pismeno = pismeno.toUpperCase();
    console.log(pismeno)
    for (let i = 0; i < delka; i++) {
        if (pismeno == jmeno[i])  {
            polePismeno[i] = pismeno;
            jeTamXd++;
        }
        else if(polePismeno[i] == jmeno[i]){
        }
        else{
            polePismeno[i] = "_" 
        }
        slovo += polePismeno[i] + " ";
        document.getElementById("hadaneSlovo").innerHTML = slovo;
    }

    polePouzitychPismen += pismeno;
    

    if (jeTamXd == 0) {
        chyby++;
    } 
    
    document.getElementById("pouzita").innerHTML = "Použitá písmena: ";
    for (let i = 0; i < polePouzitychPismen.length; i++) {
        document.getElementById("pouzita").innerHTML += polePouzitychPismen[i] + ", ";
    }
    document.getElementById("text1").innerHTML = "Počet chyb: " + chyby;
    document.getElementById("hadaneSlovo").innerHTML = slovo;
    document.getElementById("text").value = "";

    obrazek();
    gameOver();
}


//OBRAZEK
function obrazek() {

    switch (chyby) {
        case 0:
            document.getElementById("obrazek").src = "obrazek.1.png";
            break;
        case 1:
            document.getElementById("obrazek").src = "obrazek.2.png";
            break;
        case 2:
            document.getElementById("obrazek").src = "obrazek.3.png";
            break;
        case 3:
            document.getElementById("obrazek").src = "obrazek.4.png";
            break;
        case 4:
            document.getElementById("obrazek").src = "obrazek.5.png";
            break;
        case 5:
            document.getElementById("obrazek").src = "obrazek.6.png";
            break;
        case 6:
            document.getElementById("obrazek").src = "obrazek.7.png";
            break;
        case 7:
            document.getElementById("obrazek").src = "obrazek.8.png";
            break;
        case 8:
            document.getElementById("obrazek").src = "obrazek.9.png";
            break;
        case 9:
            document.getElementById("obrazek").src = "obrazek.10.png";
            document.getElementById("gameOver").innerHTML = "Prohrál proti lanu."
            break;
        default:
            break;
    }
}

function gameOver() {
    if (abc == slovo) {
        document.getElementById("gameOver").innerHTML = "Vyhrál proti slovu."
    }
}