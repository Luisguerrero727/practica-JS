function ListadeNombres (){
    let confirm = true
    let num = 1
    let listaNombres = []
    while(confirm){
        let name = prompt("Nombre de la persona " + num)
        listaNombres.push(name)
       
        confirm = prompt("Quieres continuar? (s)")
        if(confirm !=  "s"){
            confirm = false
        }
        num++
    }
    return "Los nombres son:  " + imprimirNombres(listaNombres)
}

function imprimirNombres(nombres){
    nombres.forEach(nombre => {
        (nombre)
    });
}

console.log(listaComparador());