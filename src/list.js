export default function list() {
  const table = document.querySelector(".product-table");

  const fetchProducts = localStorage.getItem("products");
  let products = fetchProducts ? JSON.parse(fetchProducts) : [];

  if (products.length === 0) {
    table.innerHTML = `
        <tr>
          <td colspan="4">
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

  // Limpa a tabela antes de renderizar
  table.innerHTML = "";

  // Tabela
  const thead = document.createElement("thead");
  thead.innerHTML = `
      <tr>
        <th>Nome</th>
        <th>Preço (R$)</th>
        <th>À Venda</th>
        <th>Ações</th>
      </tr>
    `;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  orderedProducts.forEach((product, index) => {
    const row = document.createElement("tr");
    row.className = "product-row";

    // Nome
    const nameCell = document.createElement("td");
    nameCell.className = "product-name";
    nameCell.textContent = product.name;

    // Preço
    const priceCell = document.createElement("td");
    priceCell.className = "product-price";
    priceCell.textContent = product.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // Disponibilidade
    const availabilityCell = document.createElement("td");
    availabilityCell.className = "product-availability";
    availabilityCell.textContent = product.available ? "Sim" : "Não";

    // Botão de exclusão
    const actionsCell = document.createElement("td");
    actionsCell.className = "product-actions";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => deleteProduct(index));
    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(availabilityCell);
    row.appendChild(actionsCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

// Função para deletar um produto com confirmação
function deleteProduct(index) {
  const confirmation = confirm("Tem certeza que deseja excluir este produto?");
  if (confirmation) {
    // Recupera os produtos do localStorage
    const fetchProducts = localStorage.getItem("products");
    let products = fetchProducts ? JSON.parse(fetchProducts) : [];

    // Remove o produto pelo índice
    products.splice(index, 1);

    // Atualiza o localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Atualiza a lista na interface
    list();
  }
}
