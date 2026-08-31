
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn?.addEventListener("click", () => {
  mainNav?.classList.toggle("open");
});

mainNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mainNav.classList.remove("open"));
});

const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".menu-card")];
const search = document.getElementById("search");
const emptyState = document.getElementById("emptyState");
let activeFilter = "all";

function applyMenuFilters(){
  const q = (search?.value || "").trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const category = card.dataset.category || "";
    const name = card.dataset.name || "";
    const text = card.innerText.toLowerCase();
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !q || name.includes(q) || text.includes(q);
    const show = matchesFilter && matchesSearch;
    card.hidden = !show;
    if(show) visible++;
  });

  if(emptyState) emptyState.hidden = visible !== 0;
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    applyMenuFilters();
  });
});

search?.addEventListener("input", applyMenuFilters);
