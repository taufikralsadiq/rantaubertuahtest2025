// Animasi Fade-In
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in, .visi-card, .misi-card, .profil-container, .lokasi-container");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));
});

// Jam
  function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = now.toLocaleTimeString('id-ID');
    const date = now.toLocaleDateString('id-ID', options);
    document.getElementById('tanggal-waktu').innerText = `${date} • ${time}`;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();

// Struktur
function tampilkanData(id) {
  document.querySelectorAll('.konten-item, .konten-struktur-organisasi')
    .forEach(el => el.classList.remove('aktif'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('aktif');
  }

  document.querySelectorAll('.sidebar-struktur li')
    .forEach(li => li.classList.remove('aktif'));

  const clickedLi = [...document.querySelectorAll('.sidebar-struktur li')]
    .find(li => li.getAttribute('onclick') === `tampilkanData('${id}')`);
  if (clickedLi) {
    clickedLi.classList.add('aktif');
  }
}


// dropdown
  document.querySelector(".nav-item-wrapper > a").addEventListener("click", function(e) {
    e.preventDefault();
    const dropdown = document.querySelector(".dropdown-custom");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // budaya
  function toggleBudaya(id) {
  const allDesc = document.querySelectorAll(".budaya-desc");
  const target = document.getElementById(`budaya-${id}`);

  allDesc.forEach(desc => {
    if (desc !== target) {
      desc.classList.remove("open");
    }
  });

  target.classList.toggle("open");
}

function toggleBudaya(id) {
  const allCards = document.querySelectorAll(".budaya-card");
  const targetCard = allCards[id - 1];
  const targetDesc = document.getElementById(`budaya-${id}`);

  allCards.forEach(card => {
    if (card !== targetCard) {
      card.classList.remove("open");
      const desc = card.querySelector(".budaya-desc");
      if (desc) desc.classList.remove("open");
    }
  });

  targetCard.classList.toggle("open");
  targetDesc.classList.toggle("open");
}

// Tombol Pesan dan WhatsApp
document.addEventListener("DOMContentLoaded", function() {
  const pesanBtn = document.querySelector(".fab-btn");
  const waBtn    = document.querySelector(".fab-btn-wa");
  const topBtn   = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function() {
    const maxScroll   = document.documentElement.scrollHeight - window.innerHeight;
    const triggerPoint = maxScroll / 2;

    if (window.scrollY > triggerPoint) {
      pesanBtn?.classList.add("hide");
      waBtn?.classList.add("down");
      topBtn?.classList.add("show");
    } else {
      pesanBtn?.classList.remove("hide");
      waBtn?.classList.remove("down");
      topBtn?.classList.remove("show");
    }
  });

  topBtn?.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toPesanBtn = document.getElementById("to_pesan");
  const backToTopBtn = document.getElementById("backToTopBtn");

  toPesanBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    const pesanSection = document.getElementById("pesan");
    if (pesanSection) {
      pesanSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  backToTopBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// mobile 

function toggleMobileDropdown() {
  const dropdowns = document.querySelectorAll('.nav-item-wrapper .dropdown-custom');
  dropdowns.forEach(dropdown => {
    dropdown.style.display = 'none'; 
  });

  const parent = this.closest('.nav-item-wrapper');
  const dropdown = parent.querySelector('.dropdown-custom');

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navDropdowns = document.querySelectorAll('.nav-item-wrapper .with-arrow');
  navDropdowns.forEach(item => {
    item.addEventListener('click', toggleMobileDropdown);
  });
});