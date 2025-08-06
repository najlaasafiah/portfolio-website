const toggleButton = document.getElementById("theme-toggle");

const darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled"){
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if  (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggleButton.textContent = "🌙"
        localStorage.setItem("darkMode", "disabled");
        }
    });

const scrollBtn = document.getElementById("scroll-to-top");
if (scrollBtn) {
    window.addEventListener("scroll",() => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
scrollBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
    });
}


// Flip card on click
function flipCard(cardElement) {
  const inner = cardElement.querySelector('.card-inner');
  inner.classList.toggle('flipped');
}

// Modal functions
function openModal(src) {
  event.stopPropagation(); // prevent flip while clicking image
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
