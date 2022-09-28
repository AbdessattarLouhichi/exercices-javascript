let X = Math.floor(Math.random() * 10 );
function TrouverXRandom() {
    
    let N = Number(prompt("Entrez un nombre"));
    let i = 1;
    while (N != X) {
        if (N < X ) {
            alert("plus Grand")
        }
        else{
            alert("plus Petit")
        }
        N = Number(prompt("Entrez un autre nombre"));
        i++
    }
     alert("le nombre à trouver est: " + X +
     "\nNombre de coups: " +i)
}
TrouverXRandom();