//Formula de Graham
let lpa;
let vpa;

function formulaGraham() {
    lpa = prompt("Insira o LPA");
    vpa = prompt("Insira o VPA");
    resultado = calculadoraGraham(lpa, vpa).toFixed(1);
    alert(`O resultado da formula de Graham é igual a ${resultado}`);
}
function calculadoraGraham(lpa1, vpa1) {
    return Math.sqrt(22.5 * lpa1 * vpa1);
}