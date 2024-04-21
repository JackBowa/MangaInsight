function toggleAccordion(element) {
  const content = element.nextElementSibling; // Sélectionnez le contenu suivant
  if (content.style.display === "none") { // Si le contenu est masqué
    content.style.display = "block"; // Afficher le contenu
  } else {
    content.style.display = "none"; // Masquer le contenu
  }
}
