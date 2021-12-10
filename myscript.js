
// richiamo tramite id , div container
const contenitore = document.getElementById("contenitore");

// creo ciclo "for" per assegnare classi .box . fizz .buzz

for(let i=1; i<=100; i++){

    if(i%3 == 0){
        i="Fizz";
        console.log(i);
        contenitore.innerHTML += '<div class="box fizz">' + i + '</div>';
    
    }else if(i%5 == 0){
        i="Buzz";
        console.log(i);
        contenitore.innerHTML += '<div class="box buzz">' + i + '</div>';
    
    }else if ((i%3 == 0)&&(i%5 == 0)) {
        i="FizzBuzz";
        console.log(i);
        contenitore.innerHTML += '<div class="box fizzBuzz">' + i + '</div>';
    
    }else {
        console.log(i);
        contenitore.innerHTML += '<div class="box">' + i + '</div>';
    }
}