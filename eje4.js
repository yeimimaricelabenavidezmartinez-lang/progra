import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(producto){

    rl.question("Ingrese el precio unitario: ", function(precio){

        rl.question("Ingrese la cantidad comprada: ", function(cantidad){

            const total = Number(precio) * Number(cantidad);

            console.log(`Producto: ${producto}`);
            console.log(`El total a pagar es: $${total}`);

            rl.close();
        });
    });
});