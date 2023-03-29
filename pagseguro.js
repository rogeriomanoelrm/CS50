// const precoInput = document.getElementById("preco");
// precoInput.value = "$";

const meuInput = document.getElementById("preco");

const payOption = document.getElementById("pagamento");
const totalElement = document.getElementById("total");

payOption.onchange = function() {
  const valor = parseFloat(meuInput.value); // extrai o valor numérico do input

  if (payOption.value === "Débito") {
    const taxa = 0.0299;
    const valorFinal = valor / (1 - taxa);

    totalElement.textContent = `R$ ${valorFinal.toFixed(2)}`;
  } else if (payOption.value === "Crédito") {
    const taxa = 0.0499;
    const valorFinal = valor / (1 - taxa);

    totalElement.textContent = `R$ ${valorFinal.toFixed(2)}`;
  } 
}



//  <script>

//         let receber = +window.prompt("Quanto você deseja receber?");


//         let payType = window.prompt("Pagamento no Débito ou Crédito?");




//         if (payType = "Débito") {

//             // taxa no débito e %2,99
//             let pagdeb = receber / (1 - 0.0299);



//             window.alert(`O valor a pagar é ${pagdeb.toFixed(2)}`);


//         }



//         if (payType = "Crédito") {

//             // taxa no Crédito e %4,99

//             let pagcred = receber / (1 - 0.0499);


//             window.alert(`O valor a pagar é ${pagcred.toFixed(2)}`);

//         } 




//      estava dando os mesmos valores pra débito e crédito então percebi que usei let pra taxa, deveria ter usado const; -->









//      </script> 