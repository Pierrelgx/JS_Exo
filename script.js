

// Exercice 1
// On affiche une popup lorsqu'on clique sur le footer, avec un compteur dans la console
let footer = document.querySelector("footer");
let clic = 0

footer.addEventListener("click",function(){
  console.log("cliqued ! Yeaaaah MFB");
});

//FONCTIONNALITÉ 1-bis

footer.addEventListener("click",function(){
  clic += 1;
  console.log("🔥Bravo tu as cliqueyyyyyy ! Ici c'est le numéro " + clic);
});


  
 // Exercice 2
 // On fait un satané menu HAMBURGEEER (I Would like to buy an hamburgeeer)
 function hamburgerMenu() {
	nav = document.getElementById("navbarHeader")
	hambuger = document.querySelector("button", ".navbar-toggler")
	hambuger.addEventListener("click", function () {
		nav.classList.toggle("collapse")
	})
}

hamburgerMenu()


 // Exercie 3
 // On fait de la magiiiiie en changeant la couleur du text en ROUGE 😎

 function redText() {
	editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0] ;
	textCardOne = document.querySelectorAll(".card-text")[0] ;
	editCardButtonOne.addEventListener("click", function() {
		textCardOne.style.color = "red";
	});
};

redText();
 

// Exercice 4
// Magie aussi, en green cette fois, mais possible de revenir en arrière, c'est de la magiiiiiie !
   let editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary")[1];
   let textCardTwo = document.querySelectorAll(".card-text")[1] ;
        editCardButtonTwo.addEventListener("click", function() {
        if  (textCardTwo.style.color === "green") {
              textCardTwo.style.color = "";
         } else {
             textCardTwo.style.color = "green";
      };
    });


// Exercice 5
// Le nucléaire attention c'est dangereux ☢️
let header = document.getElementsByTagName("header")[0];
let lien = document.querySelector("link");

header.addEventListener("dblclick", function(){
  if (lien.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    lien.setAttribute("href", "" );
  }else{
    lien.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  };
});
