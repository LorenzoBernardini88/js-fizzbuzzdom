
// richiamo tramite id , div container
const contenitore = document.getElementById("contenitore");

// creo ciclo "for" per assegnare classi .box . fizz .buzz

for (let i=1; i<=100; i++) {

    if ((i%3 == 0) && (i%5 == 0)) {
        testo= "FizzBuzz"; 
        classe = "fizzBuzz";
        
    } else if (i%5 == 0) {
        testo= "Buzz";
        classe = "buzz";
    
    } else if (i%3 == 0) {
        testo= "Fizz";
        classe = "fizz";
        
    } else {
        testo = i;
        classe = "";
    }

    console.log(testo);
    contenitore.innerHTML += '<div class="box '+ classe +' ">' + testo + '</div>';
}

