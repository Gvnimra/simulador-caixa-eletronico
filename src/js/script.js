
// Estado inicial do Caixa Eletronico 

//Saldo Inicial 
let saldo = 0;

//Histórico de operações (Extrato)
let extrato = [];

const saldoElemento = document.getElementById('saldo');
const inputValor = document.getElementById('valor');
const btnDepositar = document.getElementById('btn-depositar');
const btnSacar = document.getElementById('btn-sacar');
const extratoElemento = document.getElementById('extrato');

function atualizarSaldo(){
  saldoElemento.textContent = `R$ ${saldo.toFixed(2)}`;
}

atualizarSaldo();

// Evento de deposito 

btnDepositar.addEventListener('click', function(){
  const valor = Number(inputValor.value);

  if (valor <= 0 || isNaN(valor)){
    alert('Digite um valor válido para depósito.');
    return;
  }

  saldo += valor;

  extrato.push(`Depósito: + R$ ${valor.toFixed(2)}`);

  atualizarSaldo();
  atualizarExtrato();

  inputValor.value = '';
})


//Evento de saque 

btnSacar.addEventListener('click', function(){
  
  const valor = Number(inputValor.value);

  if (valor > saldo){
    alert('Saldo Insuficiente!');
    inputValor.value = '';
    return;
  }                                           

  if (valor <= 0 || isNaN(valor)) {
    alert('Digite um valor válido para saque.');
    return;
  }

  saldo -= valor; 

  extrato.push(`Saque: - R$ ${valor.toFixed(2)}`);

  atualizarSaldo();
  atualizarExtrato();

  inputValor.value = '';
}); 

// Extrato 

function atualizarExtrato() {
  extratoElemento.innerHTML = '';

  extrato.forEach(function(operacao) {
    const item = document.createElement('li');

    item.textContent = operacao;

    if(operacao.startsWith('Depósito')){
      item.classList.add('extrato-deposito');
    }else if (operacao.startsWith('Saque'))
      item.classList.add('extrato-saque');

    extratoElemento.appendChild(item);
  })                                                                                                                                                              
}