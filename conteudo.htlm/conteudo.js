function validaBusca() {
    var busca = document.querySelector('#inputlupa').value;
    if (busca === "") {
        alert("Por favor, introduza um valor na busca");
        return false;
    }
    return true;
}
