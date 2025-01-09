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
const radioContainer = document.createElement("div");
radioContainer.className = "radio-container";

const radioTitle = document.createElement("a");
radioTitle.textContent = "Disponível para venda?";
radioContainer.appendChild(radioTitle);

// radio button "Sim"
const availableRow = document.createElement("div");
availableRow.className = "radio-row";

const availableInput = document.createElement("input");
availableInput.name = "radio-button";
availableInput.id = "available";
availableInput.type = "radio";
availableInput.checked = true;

const availableLabel = document.createElement("label");
availableLabel.textContent = "Sim";
availableLabel.htmlFor = "available";

availableRow.appendChild(availableInput);
availableRow.appendChild(availableLabel);

// adio button "Não"
const notAvailableRow = document.createElement("div");
notAvailableRow.className = "radio-row";

const notAvailableInput = document.createElement("input");
notAvailableInput.name = "radio-button";
notAvailableInput.id = "not-available";
notAvailableInput.type = "radio";

const notAvailableLabel = document.createElement("label");
notAvailableLabel.textContent = "Não";
notAvailableLabel.htmlFor = "not-available";

notAvailableRow.appendChild(notAvailableInput);
notAvailableRow.appendChild(notAvailableLabel);

radioContainer.appendChild(availableRow);
radioContainer.appendChild(notAvailableRow);

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

productContainer.appendChild(radioContainer);

productContainer.appendChild(newProductBtn);
