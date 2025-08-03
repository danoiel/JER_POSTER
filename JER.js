const openCommandeBtn = document.getElementById("openCommande");
const commandeSection = document.getElementById("commande");

openCommandeBtn.addEventListener("click", () => {
  commandeSection.classList.toggle("hidden");
  commandeSection.scrollIntoView({ behavior: "smooth" });
});