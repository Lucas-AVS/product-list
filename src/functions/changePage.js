export default function changePage(page) {
  const cadastroBtn = document.querySelector(".nav-button:nth-child(1)");
  const listaBtn = document.querySelector(".nav-button:nth-child(2)");

  const productForm = document.querySelector(".product-form");
  const productTable = document.querySelector(".product-table");

  if (page === "Form") {
    productForm.id = "active";
    productTable.id = "disable";
    cadastroBtn.id = "active";
    listaBtn.id = "";
  } else if (page === "List") {
    productTable.id = "active";
    productForm.id = "disable";
    cadastroBtn.id = "";
    listaBtn.id = "active";
  }
}
