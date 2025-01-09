import "./style.css";
import header from "./components/header";

const productContainer = document.querySelector(".product-container");

header();

// Nome do Produto
const nameLabel = document.createElement("label");
nameLabel.textContent = "Nome do Produto:";
nameLabel.htmlFor = "product-name";

const nameInput = document.createElement("input");
nameInput.className = "form-input";
nameInput.id = "product-name";
nameInput.placeholder = "Ex: Smartphone X";
nameInput.type = "text";
nameInput.required = true;
nameInput.ariaRequired = "true";

// Descrição do Produto
const descriptionLabel = document.createElement("label");
descriptionLabel.textContent = "Descrição do Produto:";
descriptionLabel.htmlFor = "product-description";

const descriptionInput = document.createElement("textarea");
descriptionInput.className = "form-textarea";
descriptionInput.id = "product-description";
descriptionInput.placeholder =
  "Ex: Um produto inovador, feito com material X, na cor Y.";
descriptionInput.rows = 4;

// Valor do Produto
const valueLabel = document.createElement("label");
valueLabel.textContent = "Valor do Produto (R$):";
valueLabel.htmlFor = "product-value";

const valueInput = document.createElement("input");
valueInput.className = "form-input";
valueInput.id = "product-value";
valueInput.placeholder = "Ex: 199.99";
valueInput.type = "number";
valueInput.step = "0.01";
valueInput.min = "0";
valueInput.required = true;
valueInput.ariaRequired = "true";

// Disponível para Venda
const availabilityFieldset = document.createElement("fieldset");
availabilityFieldset.className = "form-fieldset";

const availabilityLegend = document.createElement("legend");
availabilityLegend.textContent = "Disponível para venda?";
availabilityFieldset.appendChild(availabilityLegend);

// Radio Button "Sim"
const availableRow = document.createElement("div");
availableRow.className = "radio-row";

const availableInput = document.createElement("input");
availableInput.name = "product-availability";
availableInput.id = "available";
availableInput.type = "radio";
availableInput.value = "yes";
availableInput.checked = true;

const availableLabel = document.createElement("label");
availableLabel.textContent = "Sim";
availableLabel.htmlFor = "available";

availableRow.appendChild(availableInput);
availableRow.appendChild(availableLabel);

// Radio Button "Não"
const notAvailableRow = document.createElement("div");
notAvailableRow.className = "radio-row";

const notAvailableInput = document.createElement("input");
notAvailableInput.name = "product-availability";
notAvailableInput.id = "not-available";
notAvailableInput.type = "radio";
notAvailableInput.value = "no";

const notAvailableLabel = document.createElement("label");
notAvailableLabel.textContent = "Não";
notAvailableLabel.htmlFor = "not-available";

notAvailableRow.appendChild(notAvailableInput);
notAvailableRow.appendChild(notAvailableLabel);

availabilityFieldset.appendChild(availableRow);
availabilityFieldset.appendChild(notAvailableRow);

// Botão de Adicionar Produto
const newProductBtn = document.createElement("button");
newProductBtn.className = "new-product-button";
newProductBtn.textContent = "Adicionar Produto";
newProductBtn.type = "submit";

// Adiciona os elementos ao container
productContainer.appendChild(nameLabel);
productContainer.appendChild(nameInput);

productContainer.appendChild(descriptionLabel);
productContainer.appendChild(descriptionInput);

productContainer.appendChild(valueLabel);
productContainer.appendChild(valueInput);

productContainer.appendChild(availabilityFieldset);

productContainer.appendChild(newProductBtn);
