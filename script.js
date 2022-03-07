

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
	})
}

redText()
 

// Exercice 4
// Magie aussi, en green cette fois, mais possible de revenir en arrière, avec un toggle !
function greenText () {
    editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary") [1];
    textCardTwo = document.querySelectorAll(".card-text") [1] ;
    editCardButtonTwo.addEventListener("click", function() {
        textCardTwo.style.color = "green"
    })
    
}
greenText()


// Exercice 5
// Le nucléaire attention c'est dangereux ☢️

