function promptComparacionEdad (){

    let name1 = prompt("Nome1?")
    
    let edad1 = Number(prompt("edade da primeira pessoa "))

    let name2 = prompt("Nome2?")
    
    let edad2 = Number(prompt("edade da segunda pessoa "))
    
    if(edad1 > edad2){
        return `${name1} es mayor`
    }else if(edad1 == edad2){
        return "Amas personas tienen la misma edad"
    }else{
        return `${name2} es mayor`
    }
    
}

console.log(promptComparacionEdad());

