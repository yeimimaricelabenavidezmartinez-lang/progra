import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas: ", function(horas){

    const minutos = Number(horas) * 60;

    console.log(`La equivalencia es de ${minutos} minutos`);

    rl.close();
});
