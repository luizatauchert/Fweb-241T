 let paragrafo = document.getElementById("demo");

fetch("./objects.json")
    .then(response => response.json())
    .then(listaPessoas => {
        let texto = "<b>Lista de pessoas:</b><br><br>";
        for (let i = 0; i < listaPessoas.pessoas.length; i++) {
            let pessoa = listaPessoas.pessoas[i];
            texto += `Nome: ${pessoa.nome} <br>`;
            texto += `Idade: ${pessoa.idade} <br>`;
            texto += `CPF: ${pessoa.cpf} <br>`;
            texto += `Telefone: ${pessoa.telefone} <br><br>`;
        }
        paragrafo.innerHTML = texto;
    });