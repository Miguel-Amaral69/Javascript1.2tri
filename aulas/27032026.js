// Criar Array

const fila = [1,2,3,4,5,6];

const filaStringAmigos = ["Ana Julia","Miguel","Renan","Rogerio Aldegar","Caldo Della Pene"];

function lerAmigos(filaStringAmigos){
    console.log(`Você tem ${filaStringAmigos.length} amigos`)

    for(let i = 0; i < filaStringAmigos.length;1++){
        console.log(filaStringAmigos[i])
        if(filaStringAmigos[i] === "Rogerio Aldegar"){
            console.log(`Index do seu melhor amigo é ${i}`)
        }
    }
}