document.querySelectorAll("[data-years-since]").forEach((element) => {
  const startYear = Number(element.dataset.yearsSince);
  const currentYear = new Date().getFullYear();

  if (Number.isFinite(startYear) && currentYear >= startYear) {
    element.textContent = String(currentYear - startYear);
  }
});
