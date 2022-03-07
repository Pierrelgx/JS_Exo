

// Exercice 1
// On affiche une popup lorsqu'on clique sur le footer, avec un compteur dans la console
function footerAlert() {
	footer = document.querySelector("footer")
	i = 1
	footer.addEventListener("click", function() {
		alert("🔥 Bravooo, tu as réussi à cliqueyyyy. Ici c'est le clique numéro " + i)
		i++
	})
    }
 footerAlert()

  
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
