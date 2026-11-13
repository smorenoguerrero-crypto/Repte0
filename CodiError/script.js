// Espera a que toT elcontigut de l’HTML s’hagi carregat
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionam el botó pel seu ID
    const boto = document.getElementById('boto');
    const missatge = document.getElementById('missatge');
    // Asignam la funció que s’executara al pulsar el botó
    boto.addEventListener('click', () => {
        missatge.textContent = '¡El archivo error.js se ha ejecutado correctamente!';
        missatge.style.color = 'green';


        // Aquí poses el codi que vulguis executar

        try {
            let resultat = sumar();
            missatge.textContent = resultat;
            missatge.style.color = 'green';

        } catch (error) {
            missatge.textContent = error.message;
            missatge.style.color = 'red';
        }

    });
});

function sumar() {
   let n1 = Number(prompt("Introdueix el primer número:"));
   let n2 = Number(prompt("A continuació, el segon número:"));

   if (isNaN(n1) || isNaN(n2)) {
       throw new Error("Error 1: Has d'introduir números vàlids.");
   }

   let suma = n1 + n2;

   if (suma === 0) {
       throw new Error("Error 2: La suma no pot ser zero.");
   }

   console.log(`El resultat de la suma de ${n1} i ${n2} és ${suma}.`);

   return suma;
}
