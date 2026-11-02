const toast = document.getElementById("toast");
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}
document.querySelectorAll("[data-category]").forEach(card => {
  card.addEventListener("click", () => notify(`${card.dataset.category} selected`));
});
document.getElementById("orderNow").addEventListener("click", () => notify("Let's get your order started!"));
document.getElementById("seeAll").addEventListener("click", () => notify("Showing all popular choices"));
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
    item.classList.add("active");
    notify(`${item.dataset.tab} opened`);
  });
});
document.querySelector(".cart-button").addEventListener("click", () => notify("Your cart has 2 items"));
document.querySelector(".notification").addEventListener("click", () => notify("You're all caught up!"));
document.querySelector(".avatar").addEventListener("click", () => notify("Profile opened"));
document.querySelector(".delivery").addEventListener("click", () => notify("Choose a delivery address"));
document.querySelector(".search input").addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.value.trim()) notify(`Searching for ${e.target.value.trim()}`);
});
