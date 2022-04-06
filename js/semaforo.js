const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 0;

const mostrarLuz = () =>{
    $lucesDelCirculo[contadorDeLuz].className = 'luces-circulo';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const luzActual = $lucesDelCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
setInterval(mostrarLuz,2000)

const $lucesDelCirculo2 = document.querySelectorAll('.luces-circulo2');
let contadorDeLuz2 = 0;

const mostrarLuz2 = () =>{
    $lucesDelCirculo2[contadorDeLuz2].className = 'luces-circulo2';
    contadorDeLuz2++;

    if(contadorDeLuz2 > 2) contadorDeLuz2 = 0;

    const luzActual2 = $lucesDelCirculo2[contadorDeLuz2];
    luzActual2.classList.add(luzActual2.getAttribute('color'))
}
setInterval(mostrarLuz2,2000)