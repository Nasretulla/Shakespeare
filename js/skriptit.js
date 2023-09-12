//metodia etsi elementin, joka vastaa CSS-sääntöä #eka > ul. se tallentaa löydetyn elementin e0-muuttujaan
let e0 = document.querySelector("#eka > ul ");
e0.classList.add("rivit-vierekkain");

let e09 = document.querySelectorAll("#eka ul li");


let e2 = document.querySelector("#eka");
e2.classList.add("lista-otsikko");

let e3 = document.querySelector("#toka");
e3.classList.add("joka-toinen-rivi");

let e4 = document.querySelector("#kolmas");
e4.classList.add("joka-toinen-rivi1");

//Annetaan linkeille yhteiset tyylit käymällä läpi
let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].style =
    "color: #801910; font-weight: 600; text-decoration-style: dotted; text-decoration-style:  dashed;";
}

// Hakee kaikki dokumentin linkit ja tallentaa ne linkList-muuttujaan
var linkList = document.links;

// PDF ikoni varten luodaan uusia kuvaelemntti
var pdfImage = new Image(15, 15);
//kuvan lähde
pdfImage.src = "./images/file-pdf-solid.svg";
//kuvan id-attribuuttin asettaminen
pdfImage.setAttribute("id", "pdfKuva");

// samat asiat toistuu näissäkin
var mailImage = new Image(15, 15);
mailImage.src = "./images/envelope-solid.svg";
mailImage.setAttribute("id", "mailkuva");

// sama täällä
var arrowImg = new Image(15, 15);
arrowImg.src = "./images/arrow-up-right-from-square-solid.svg";
arrowImg.setAttribute("id", "nuoliKuva");

var arrowImg2 = new Image(20, 15);
arrowImg2.src = "./images/arrow-up-right-from-square-solid.svg";
arrowImg2.setAttribute("id", "nuoliKuva2");

//Tärkein vaihe-> käydään läpi kaikki linkit ja alisätään tarvittavat lisäykset
for (let i = 0; i < linkList.length; i++) {
  linkList[i].classList.add("dotted");
  // tarkistetaan päättyykö linkin href-arvo PDF tunnisteeseen jos niin seuraavaksi asetetaan pdf kuvake linkiin
  if (document.links[i].href.slice(-3) == "pdf") {
    linkList[i].appendChild(pdfImage);
    //  Vasen sisennys
    document.getElementById("pdfKuva").style.paddingLeft = "0.5rem";
  }

  // tarkistetaan sisältääkö linkin href arvo "@" merkin
  if (document.links[i].href.includes("@")) {
    linkList[i].prepend(arrowImg2);

    linkList[i].prepend(mailImage);
    document.getElementById("mailkuva").style.paddingLeft = "1rem";
  }
  // jos linkin href sisältää "http://" tai "https://" lisätään nuoliKuva ja vasen sisennys
  if (
    document.links[i].href.includes("http://") ||
    document.links[i].href.includes("https://")
  ) {
    linkList[i].prepend(arrowImg);
    document.getElementById("nuoliKuva").style.paddingLeft = "0.1rem";
  }
}
