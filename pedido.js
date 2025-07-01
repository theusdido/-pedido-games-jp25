let total_quantidade = 0;
let total_valor = 0;

function adicionar() {
  const produto = $("#Produto").val();
  const quantidade = $("#quantidade").val();
  const valor = $("#valor").val();
  const cod = $("lista-produto tbody tr").length + 1;
  total_quantidade += parseInt(quantidade);
  total_valor += parseFloat(valor) * quantidade;
  $("#total-quantidade").text(total_quantidade);
  $("#total-valor").text(total_valor.toFixed(2));

  const linha = `<tr>
  <td>${cod}</td>
   <td>${produto}</td>
    <td>${quantidade}</td>
     <td>${valor}</td>
    </tr>`;
  $("#lista-produto tbody").append(linha);
}
