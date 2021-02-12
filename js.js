const n = document.querySelectorAll(".n");
const pantalla = document.querySelector(".calculadora-pantalla");
const ce = document.getElementById("ce");

ce.addEventListener("click",function (){
    pantalla.innerHTML = "";
})

for(let i = 0; i < n.length; i++){
    n[i].addEventListener("click",function (e){
        if(e.target.innerText == "="){
            if(pantalla.innerHTML == ""){
                alert("No se puede hacer la operación");
            }else{
                let resultado = calcular(pantalla.innerHTML);
                pantalla.innerHTML = resultado;
            }   
        }else{
            pantalla.innerHTML += e.target.innerText;
        }
    });
};

const calcular = (caracteres) =>{
    let pElemento = []; 
    let sElemento = []; 
    let operacion;
    let semaforo = false;
    let numeros = Array.from (caracteres);
    if(numeros[0] == "/" || numeros[0] == "*" || numeros[0] == "+" ){
        alert("No se puede hacer la operacion");
        pantalla.innerText = "";
    };

    for(let i = 0; i < numeros.length; i++){

        if(numeros[i] == "/" || numeros[i] == "*" || numeros[i] == "-" || numeros[i] == "+" ){
            operacion = numeros[i]
            semaforo = true;
        }else if(semaforo == false){
            pElemento.push(numeros[i]);
        }else{
            sElemento.push(numeros[i]);
        }

    }

    if(sElemento == ""){
        return pElemento;
    }

    primero = parseFloat( pElemento.join("") );
    segundo = parseFloat( sElemento.join("") );
 

    if(operacion == "/"){
        pantalla.innerHTML = "";
        return primero / segundo;
    }else if(operacion == "*"){
        pantalla.innerHTML = "";
        return primero * segundo;
    }else if(operacion == "-"){
        pantalla.innerHTML = "";
        return primero - segundo;
    }else{
        pantalla.innerHTML = "";
        return primero + segundo;
    }
};


