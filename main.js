// // ==== DARK/LIGHT MODE ====
// const themeToggle = document.getElementById('themeToggle');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'dark') {
//   document.body.classList.add('dark-mode');
// }

// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
//   localStorage.setItem('theme', 
//     document.body.classList.contains('dark-mode') ? 'dark' : 'light'
//   );
// });

// ==== DARK/LIGHT MODE ====
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ===== Magnetic Cursor =====
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// ===== Section Scroll Reveal =====
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// ===== Skills Animation on View =====
const skills = document.querySelectorAll(".skill");
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => skillObserver.observe(skill));

// ==== CONTACT FORM (Web3Forms) ====
// ==== Toast Function ====
function showToast(message, isSuccess = true) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  if (!isSuccess) toast.style.background = 'rgba(255,0,0,0.85)';

  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==== CONTACT FORM (with loading + toast) ====
const form = document.getElementById('contactForm');
const sendBtn = form.querySelector('button');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  sendBtn.classList.add('loading');

  try {
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showToast("Message sent successfully! ✅", true);
      form.reset();
    } else {
      const err = await response.json();
      showToast(err.message || "Oops! Something went wrong. ❌", false);
    }
  } catch (error) {
    showToast("Error sending message. Please try again.", false);
  } finally {
    sendBtn.classList.remove('loading');
  }
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});


// ==== CONTACT FORM (Formspree.io) ====

// // ==== CONTACT FORM ====
// const form = document.getElementById('contactForm');
// const statusEl = document.getElementById('form-status');

// form.addEventListener('submit', async function (event) {
//   event.preventDefault();
//   statusEl.textContent = "Sending...";
  
//   try {
//     const data = new FormData(form);
//     const response = await fetch(form.action, {
//       method: form.method,
//       body: data,
//       headers: { 'Accept': 'application/json' }
//     });

//     if (response.ok) {
//       statusEl.textContent = "Message sent successfully! ✅";
//       form.reset();
//     } else {
//       statusEl.textContent = "Oops! Something went wrong. ❌";
//     }
//   } catch (error) {
//     statusEl.textContent = "Error sending message. Please try again.";
//   }
// });