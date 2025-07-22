async function loadVotesAndRender() {
  const res = await fetch("assets/votes.json");
  const data = await res.json();

  const table = document.getElementById("voteResults");
  for (const layout in data) {
    const row = document.createElement("tr");

    const layoutCell = document.createElement("td");
    layoutCell.textContent = layout;

    const votesCell = document.createElement("td");
    votesCell.textContent = data[layout];

    row.appendChild(layoutCell);
    row.appendChild(votesCell);

    table.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", loadVotesAndRender);

