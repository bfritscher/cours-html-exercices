document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  // Check if container exists
  if (!container) {
    console.error("Error: div.container is missing from the HTML");
    document.body.innerHTML = '<div style="color: red; font-size: 20px; padding: 20px; text-align: center;">Error: div.container is missing from the HTML</div>';
    return;
  }

  // Create the wrapper structure
  const dFlex = document.createElement("div");
  dFlex.classList.add("d-flex");

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  const flexGrow = document.createElement("div");
  flexGrow.classList.add("flex-grow-1");

  // Wrap the container
  container.parentNode.insertBefore(dFlex, container);
  dFlex.appendChild(spacer);
  dFlex.appendChild(flexGrow);
  flexGrow.appendChild(container);

  // Create h1 element
  const h1 = document.createElement("h1");
  h1.classList.add("text-center", "m-3", "h3");
  h1.innerHTML = `Boostrap Grid Size
    <span class="d-inline d-md-none">&lt;= SM</span>
    <span class="d-none d-md-inline d-lg-none">= MD</span>
    <span class="d-none d-lg-inline">&gt;= LG</span>`;

  // Create header row
  const row = document.createElement("div");
  row.classList.add("row", "header");
  for (let i = 0; i < 12; i++) {
    const col = document.createElement("div");
    col.classList.add("col");
    col.textContent = i + 1;
    row.appendChild(col);
  }

  // Insert h1 before container
  container.parentNode.insertBefore(h1, container);
  // Add row as first child of container
  container.insertBefore(row, container.firstChild);
});
