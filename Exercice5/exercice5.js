
function Somme(TAB) {

    let S = 0;
    for (let i = 0; i < TAB.length; i++) {
       S = S + TAB[i]
    }
     return S
}


let T = [];
let N = Number(prompt("Entrez un nombre"));
for (let i = 0; i < N; i++) {
    T[i] =  Number(prompt("Entrez un entier"))
}

alert("la somme est: " + Somme(T)); 
