// Menu toggle para mobile
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });
}

// Dropdown functionality para mobile
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", (e) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      dropdownMenu.classList.toggle("hidden");
    }
  });
}

// Filter functionality para página do blog
const filterButtons = document.querySelectorAll(".filter-btn");
const postCards = document.querySelectorAll(".post-card");

if (filterButtons.length > 0 && postCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Update active state for desktop
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white", "font-semibold");
        btn.classList.add("text-gray-800");
      });
      button.classList.add("bg-primary", "text-white", "font-semibold");
      button.classList.remove("text-gray-800");

      const filter = button.getAttribute("data-filter");
      const label = button.getAttribute("data-label");

      // Update mobile dropdown label
      const selectedCategory = document.getElementById("selected-category");
      if (selectedCategory && label) {
        selectedCategory.textContent = `Categorias: ${label}`;
      }

      // Close mobile dropdown
      const categoryDropdown = document.getElementById("category-dropdown");
      if (categoryDropdown) {
        categoryDropdown.classList.add("hidden");
      }

      // Filter posts
      postCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Mobile category dropdown toggle
const categoryToggle = document.getElementById("category-toggle");
const categoryDropdown = document.getElementById("category-dropdown");

if (categoryToggle && categoryDropdown) {
  categoryToggle.addEventListener("click", () => {
    categoryDropdown.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !categoryToggle.contains(e.target) &&
      !categoryDropdown.contains(e.target)
    ) {
      categoryDropdown.classList.add("hidden");
    }
  });
}
