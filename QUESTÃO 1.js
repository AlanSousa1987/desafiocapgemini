// Questão 1

function padTest(tamanho) {
const str = "*";
for(var i = 0; i < tamanho; i++) {

    console.log(str.padStart(tamanho - i).padEnd(tamanho, str))
    
    }
}
