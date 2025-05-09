let paragrafo = document.getElementById("demo");

fetch("./objects.json")
    .then(response => response.json())
    .then(listaPessoas => {
        let texto = "<b>Materias:</b><br><br>";
        for (let i = 0; i < listaPessoas.pessoas.length; i++) {
            let materias = listaPessoas.pessoas[i];
            texto += `Nome: ${pessoa.nome} <br>`;

        }
        paragrafo.innerHTML = texto;
    });