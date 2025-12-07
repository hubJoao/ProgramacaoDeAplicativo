// EXERCÍCIO 1: CALCULADORA SIMPLES

// Sua solução aqui:


function somar(a,b){
    return a+b; 
    
};

function subtrair(a,b){
    return a-b; 
    
};

function multiplicar(a,b){
    return a*b; 
    
};

function dividir(a,b){
    if(b===0){
        return "Erro: divisão por zero";
    }
    return a/b; 
    
};






console.log("=== EXERCÍCIO 1 -- calculadora simples===");
console.log("");   
console.log("função somar",somar(5, 3));                  // Esperado: 8
console.log("função subtrair",subtrair(10, 4));           // Esperado: 6
console.log("função multiplicar",multiplicar(3, 7));     // Esperado: 21
console.log("função dividir",dividir(15, 3));        // Esperado: 5
console.log("Esperado: Erro: divisão por zero", dividir(10, 0));        // Esperado: "Erro: divisão por zero"

    console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

// EXERCÍCIO 2: CLASSIFICAÇÃO DE IDADE

// Sua solução aqui:

function classificarIdade(idade){
if( idade<0){
    return "Idade inválida";
}
else if(idade<=12){
    return "Criança";
}
else if(idade<=17){
    return "Adolescente";
}
else if(idade<=64){
    return "Adulto";
}
else{
    return "Idoso";
}
};



// Testes:
console.log("\n=== EXERCÍCIO 2 -- CLASSIFICAÇÃO DE IDADE ===");
console.log("idade negativa (idade:-5)",classificarIdade(-5));   // Esperado: "Idade inválida"
console.log(" 0 a 12 anos  (idade:8) ",classificarIdade(8));    // Esperado: "Criança"
console.log(" 13 a 17 anos (idade:15)",classificarIdade(15));   // Esperado: "Adolescente"
console.log(" 18 a 64 anos (idade:30)",classificarIdade(30));   // Esperado: "Adulto"
console.log(" 65 anos e acima (idade70)",classificarIdade(70));   // Esperado: "Idoso"

console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");



// EXERCÍCIO 3: TABUADA

// Sua solução aqui:

function exibirTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}




// Testes:
console.log("\n=== EXERCÍCIO 3 --- tabuada do 7 ===");
exibirTabuada(7);




console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

// EXERCÍCIO 4: CONTADOR DE PARES E ÍMPARES

// Sua solução aqui:



function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}



// Testes:
console.log("\n=== EXERCÍCIO 4 ----  CONTADOR DE PARES E ÍMPARES ===");
const resultado1 = contarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resultado1); // Esperado: { pares: 5, impares: 5 }

const resultado2 = contarParesImpares([2, 4, 6, 8]);
console.log(resultado2); // Esperado: { pares: 4, impares: 0 }

const resultado3 = contarParesImpares([1, 3, 5, 7, 9]);
console.log(resultado3); // Esperado: { pares: 0, impares: 5 }

console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");




// EXERCÍCIO 5: VALIDADOR DE SENHA (BÔNUS)

// Sua solução aqui:


function validarSenha(senha) {
    // Verifica se tem pelo menos 8 caracteres
    const temTamanhoMinimo = senha.length >= 8;

    // Verifica se contém pelo menos uma letra maiúscula
    const temMaiuscula = /[A-Z]/.test(senha);

    // Verifica se contém pelo menos uma letra minúscula
    const temMinuscula = /[a-z]/.test(senha);

    // Verifica se contém pelo menos um número
    const temNumero = /[0-9]/.test(senha);

    // Retorna true se todas as condições forem atendidas
    return temTamanhoMinimo && temMaiuscula && temMinuscula && temNumero;
}

// Exemplos de uso:
console.log(validarSenha("Senha123")); // true  
console.log(validarSenha("senha123")); // false (não tem maiúscula)
console.log(validarSenha("SENHA123")); // false (não tem minúscula)
console.log(validarSenha("Senha"));    // false (não tem número e é curta)


// Testes:
console.log("\n=== EXERCÍCIO 5 (BÔNUS) ===");
console.log("");   
console.log(validarSenha("Abc12345"),"true - contem pelo menos 8 caracteres ");   // Esperado: true
console.log(validarSenha("abc12345"),"false não tem maiúscula");   // Esperado: false
console.log(validarSenha("ABC12345"),"false não tem minúscula");   // Esperado: false
console.log(validarSenha("AbcDefgh"),"false não tem número");   // Esperado: false
console.log(validarSenha("Abc123"),"false não tem número e é curta");     // Esperado: false


console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

// EXERCÍCIO 6: CONVERSOR DE TEMPERATURA (BÔNUS)

// Função para converter Celsius → Fahrenheit
function celsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return Number(fahrenheit.toFixed(2)); // arredonda para 2 casas decimais
}

// Função para converter Fahrenheit → Celsius
function fahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return Number(celsius.toFixed(2));
}

// Função para converter Celsius → Kelvin
function celsiusParaKelvin(celsius) {
    const kelvin = celsius + 273.15;
    return Number(kelvin.toFixed(2));
}


// Testes:
console.log("\n=== EXERCÍCIO 6 (BÔNUS) ===");
console.log("fahrenheit",celsiusParaFahrenheit(0));      // Esperado: 32
console.log("fahrenheit",celsiusParaFahrenheit(100));    // Esperado: 212
console.log("celsius",
fahrenheitParaCelsius(32));     // Esperado: 0
console.log("Celsius",fahrenheitParaCelsius(212));    // Esperado: 100
console.log("Kelvin",celsiusParaKelvin(0));          // Esperado: 273.15
console.log("Kelvin",celsiusParaKelvin(100));        // Esperado: 373.15
