document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("reserva-form");
  const reservasContainer = document.getElementById("reservas-container");

  function adicionarReserva(nome, data, horario) {
    const novaReserva = {
      nome: nome,
      data: data,
      horario: horario
    };

    // Faz a solicitação para o servidor local para adicionar a nova reserva
    fetch('http://localhost:3000/reservas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaReserva)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Atualiza a exibição das reservas
        exibirReservas();
      })
      .catch(error => {
        console.error('Erro:', error);
      });

    form.reset();
  }

  function exibirReservas() {
    // Faz a solicitação para o servidor local para obter as reservas
    fetch('http://localhost:3000/reservas')
      .then(response => response.json())
      .then(data => {
        // Limpa o contêiner
        reservasContainer.innerHTML = "";

        // Percorre todas as reservas e as adiciona ao contêiner
        data.forEach(function(reserva) {
          const reservaElemento = document.createElement("p");
          reservaElemento.textContent = "Nome: " + reserva.nome + ", Data: " + reserva.data + ", Horário: " + reserva.horario;
          reservasContainer.appendChild(reservaElemento);
        });
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    adicionarReserva(nome, data, horario);
  });

  // Exibe as reservas iniciais ao carregar a página
  exibirReservas();
});
