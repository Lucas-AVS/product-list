export default function list() {
  const table = document.querySelector(".product-table");

  const fetchProducts = localStorage.getItem("products");
  let products = [];

  if (fetchProducts) {
    products = JSON.parse(fetchProducts);
  }

  if (products.length === 0) {
    table.innerHTML = `
        <tr>
          <td colspan="2">
            <p>
              Sem produtos disponíveis, por favor cadastre um produto na aba "Cadastro de Produtos".
            </p>
          </td>
        </tr>
      `;
    return;
  }

  // Ordena os produtos pelo menor preço
  const orderedProducts = products.sort((a, b) => a.price - b.price);

  // Limpa a lista antes de renderizar
  table.innerHTML = "";

  // tabela
  const thead = document.createElement("thead");
  thead.innerHTML = `
      <tr>
        <th>Nome</th>
        <th>Preço (R$)</th>
      </tr>
    `;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  orderedProducts.forEach((product) => {
    const row = document.createElement("tr");
    row.className = "product-row";

    // Nome
    const nameCell = document.createElement("td");
    nameCell.className = "product-name";
    nameCell.textContent = product.name;

    // Preço formatado para Real (R$)
    const priceCell = document.createElement("td");
    priceCell.className = "product-price";
    priceCell.textContent = product.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}
