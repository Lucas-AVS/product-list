import "./style.css";
import header from "./components/header";

const productContainer = document.querySelector(".product-container");

header();

// Nome do Produto
const nameLabel = document.createElement("label");
nameLabel.textContent = "Nome do Produto:";
nameLabel.htmlFor = "name-input";

const nameInput = document.createElement("input");
nameInput.className = "name-input";
nameInput.id = "name-input";
nameInput.placeholder = "Produto X";

// Descrição do Produto
const descriptionLabel = document.createElement("label");
descriptionLabel.textContent = "Descrição do Produto:";
descriptionLabel.htmlFor = "description-input";

const descriptionInput = document.createElement("input");
descriptionInput.className = "description-input";
descriptionInput.id = "description-input";
descriptionInput.placeholder = "Produto usado para... Do material... Na cor...";

// Valor do Produto
const valueLabel = document.createElement("label");
valueLabel.textContent = "Valor do Produto:";
valueLabel.htmlFor = "value-input";

const valueInput = document.createElement("input");
valueInput.className = "value-input";
valueInput.id = "value-input";
valueInput.placeholder = "R$:00,00";

// Disponível para Venda
const availableLabel = document.createElement("label");
availableLabel.textContent = "Disponível para venda?";
availableLabel.htmlFor = "available-input";

const availableInput = document.createElement("input");
availableInput.className = "available-input";
availableInput.id = "available-input";
availableInput.type = "radio";

// Botão de Adicionar Produto
const newProductBtn = document.createElement("button");
newProductBtn.className = "new-product-button";
newProductBtn.textContent = "Adicionar produto";

// Adiciona os elementos ao container
productContainer.appendChild(nameLabel);
productContainer.appendChild(nameInput);

productContainer.appendChild(descriptionLabel);
productContainer.appendChild(descriptionInput);

productContainer.appendChild(valueLabel);
productContainer.appendChild(valueInput);

productContainer.appendChild(availableLabel);
productContainer.appendChild(availableInput);

productContainer.appendChild(newProductBtn);

// {
//   - Descrição do produto - campo de texto
//   - Valor do produto - campo de valor
//   - Disponível para venda - campo com 2 opções: sim / não
// }
