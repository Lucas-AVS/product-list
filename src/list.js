export default function list() {
  const table = document.querySelector(".product-table");

  const products = [
    {
      name: "Tesoura",
      description: "Tesoura infantil, para crianças a partir de 5 anos",
      price: 8,
      available: true,
    },
    {
      name: "Monitor Padrão",
      description: "Monitor básico com cabo VGA",
      price: 300,
      available: true,
    },
    {
      name: "Fone de Ouvido",
      description: "Fone básico sem marca, modelo de entrada",
      price: 20,
      available: false,
    },
  ];

  // Ordena os produtos pelo menor preço
  const orderedProducts = products.sort((a, b) => a.price - b.price);

  // Limpa a lista antes de renderizar
  table.innerHTML = "";

  // Tabela
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

    // Preço
    const priceCell = document.createElement("td");
    priceCell.className = "product-price";
    priceCell.textContent = `${product.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}
