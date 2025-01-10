export default function changePage(page) {
  const productForm = document.querySelector(".product-form");
  const productTable = document.querySelector(".product-table");

  if (page === "Form") {
    productForm.id = "active";
    productTable.id = "disable";
  } else if (page === "List") {
    productTable.id = "active";
    productForm.id = "disable";
  }
}
