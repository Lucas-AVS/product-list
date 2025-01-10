import changePage from "../functions/changePage";

export default function header() {
  const header = document.querySelector("header");

  // logo
  const logo = document.createElement("a");
  logo.className = "logo";
  logo.href = "#";

  const logoImg = document.createElement("img");
  logoImg.className = "logo-img";
  logoImg.src = "../src/assets/logo-placeholder.png";
  logoImg.alt = "Logo do Sistema";

  // navbar
  const nav = document.createElement("nav");
  nav.className = "nav-links";

  const cadastroBtn = document.createElement("button");
  cadastroBtn.className = "nav-button";
  cadastroBtn.textContent = "Cadastro de Produtos";
  cadastroBtn.id = "active";

  const listaBtn = document.createElement("button");
  listaBtn.className = "nav-button";
  listaBtn.textContent = "Lista de Produtos";

  nav.appendChild(cadastroBtn);
  nav.appendChild(listaBtn);

  logo.appendChild(logoImg);
  header.appendChild(logo);
  header.appendChild(nav);

  cadastroBtn.addEventListener("click", () => changePage("Form"));
  listaBtn.addEventListener("click", () => changePage("List"));
}
