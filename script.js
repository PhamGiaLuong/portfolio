document.addEventListener("DOMContentLoaded", () => {
  // --- i18n State Engine ---
  let currentLang = localStorage.getItem("lang") || "en";

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    // Update static UI elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        // If it's a structural element, we might need innerHTML, but textContent is safer.
        // Since our translations have some <strong> tags, innerHTML is required.
        el.innerHTML = translations[lang][key];
      }
    });

    // Update the language toggle button text
    const langBtnText = document.querySelector(".lang-btn span:first-child");
    if (langBtnText) {
      langBtnText.textContent = lang.toUpperCase();
    }

    // Re-render project cards with selected language
    if (typeof renderProjects === "function") {
      renderProjects(lang);
    }
  }

  // Set up language switcher events
  document.querySelectorAll(".lang-dropdown span").forEach((item) => {
    item.addEventListener("click", (e) => {
      const selectedLang = e.target.getAttribute("data-lang");
      if (selectedLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Intersection Observer for slide-up animations on scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".slide-up").forEach((element) => {
    observer.observe(element);
  });

  // Parallax effect for hero shapes
  const hero = document.querySelector(".hero");
  const shapes = document.querySelectorAll(".shape");

  if (hero && shapes.length > 0) {
    document.addEventListener("mousemove", (e) => {
      // Only calculate parallax if hero is somewhat in view
      if (window.scrollY > window.innerHeight) return;

      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      shapes.forEach((shape, index) => {
        const speed = index === 0 ? 2 : index === 1 ? 4 : 3;
        shape.style.setProperty("--px", `${x * speed}px`);
        shape.style.setProperty("--py", `${y * speed}px`);
      });
    });
  }

  // Interactive Hero Shapes using CSS variables
  document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".shape");
    // Calculate relative mouse position from center of screen
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    shapes.forEach((shape, index) => {
      // Give each shape a slightly different movement multiplier
      const speed = (index % 3) + 1;
      const xOffset = x * speed;
      const yOffset = y * speed;
      shape.style.setProperty("--px", `${xOffset}px`);
      shape.style.setProperty("--py", `${yOffset}px`);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Only process if it's still a local hash link
      if (!targetId || !targetId.startsWith("#")) return;

      e.preventDefault();
      if (targetId === "#") return;

      try {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      } catch (error) {
        console.warn("Smooth scroll selector error ignored:", error);
      }
    });
  });
  // Modal Script & Dynamic Project Rendering
  const modal = document.getElementById("projectModal");
  const closeBtn = document.querySelector(".close-btn");
  const modalPdf = document.getElementById("modalPdf");
  const noPdfMessage = document.getElementById("noPdfMessage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDomain = document.getElementById("modalDomain");
  const modalDesc = document.getElementById("modalDesc");
  const modalGithub = document.getElementById("modalGithub");

  const projectGrid = document.getElementById("projectGrid");

  // Extracted render logic to adapt to language changes dynamically
  function renderProjects(lang) {
    if (!projectGrid || typeof projectsData === "undefined") return;

    projectGrid.innerHTML = ""; // Clear existing

    projectsData.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.cursor = "pointer";

      // Handle i18n for dynamic data
      const title = project.title[lang] || project.title.en;
      const domain = project.domain[lang] || project.domain.en;
      const desc = project.desc[lang] || project.desc.en;
      const learnMoreText =
        translations[lang] && translations[lang].learnMore
          ? translations[lang].learnMore
          : "Learn More";

      card.innerHTML = `
                <div class="project-icon"><i class="${project.icon}"></i></div>
                <div class="project-content">
                    <h3>${title}</h3>
                    <p class="project-domain">${domain}</p>
                    <p class="project-desc">${desc}</p>
                    <a href="${project.github}" target="_blank" class="project-link">${learnMoreText} <i class="fas fa-arrow-right"></i></a>
                </div>
            `;

      // Attach click event for the modal
      card.addEventListener("click", (e) => {
        if (e.target.closest(".project-link")) return;

        const detailedDesc =
          project.detailedDesc[lang] || project.detailedDesc.en;

        modalTitle.textContent = title;
        modalDomain.textContent = domain;
        if (detailedDesc) {
          modalDesc.innerHTML = detailedDesc;
        } else {
          modalDesc.textContent = desc;
        }
        modalGithub.href = project.github;

        if (project.pdf && project.pdf !== "#" && project.pdf !== "") {
          modalPdf.src = project.pdf;
          modalPdf.style.display = "block";
          noPdfMessage.style.display = "none";
        } else {
          modalPdf.style.display = "none";
          noPdfMessage.style.display = "flex";
        }

        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
        document.body.style.overflow = "hidden";
      });

      projectGrid.appendChild(card);
    });
  }

  // Initialize application language on load
  setLanguage(currentLang);

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.style.display = "none";
      if (modalPdf) modalPdf.src = "";
    }, 300);
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
