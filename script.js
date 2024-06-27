function validar() {
   var email = document.getElementById("email").value;

   // Define uma expressão regular para verificar o formato do e-mail
   var expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // Verifica se o endereço de e-mail tem um formato válido
   if (!expressaoRegular.test(email)) {
      // Se o e-mail não for válido, exibe uma mensagem de erro
      alert("Por favor, digite um endereço de e-mail válido.");
      document.getElementById("email").focus();
      return false;
   }

   return true;
}

function maskfone(event) {
   var input = event.target; // obter o elemento HTML que acionou o evento
   var value = input.value; // obter o valor atual do elemento HTML
   value = value.replace(/\D/g, ''); // remover todos os caracteres não numéricos
   value = value.substring(0, 10);
   value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // adicionar os parênteses no DDD
   value = value.replace(/(\d{5})(\d)/, '$1-$2'); // adicionar o hífen após os primeiros quatro dígitos do número
   input.value = value; // definir o novo valor do elemento HTML
}
