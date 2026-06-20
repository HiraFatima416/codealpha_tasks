// Scroll to Projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  }
  
  // Dark / Light Mode
  const themeBtn = document.getElementById("themeBtn");
  
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
  
    if (document.body.classList.contains("light")) {
      themeBtn.textContent = "☀";
    } else {
      themeBtn.textContent = "🌙";
    }
  });
  
  // Scroll Animation
  const hiddenElements = document.querySelectorAll(".hidden");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  
  hiddenElements.forEach((el) => observer.observe(el));
  
  // Back to Top Button
  const topBtn = document.getElementById("topBtn");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
