  let amigos = [];

  function adicionarAmigo() {
      let input = document.getElementById("amigo");
      let nome = input.value.trim();

      if (nome && !amigos.includes(nome)) {
          amigos.push(nome);
          atualizarLista();
          input.value = "";
      } else {
          alert("Nome inválido ou já adicionado!");
      }
  }

  function atualizarLista() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";
      
      amigos.forEach((amigo, index) => {
          let li = document.createElement("li");
          li.textContent = amigo;
          lista.appendChild(li);
      });
  }

  function sortearAmigo() {
      if (amigos.length === 0) {
          alert("Adicione pelo menos um amigo antes de sortear!");
          return;
      }
      let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
      alert(`O amigo secreto sorteado é: ${sorteado}`);
  }