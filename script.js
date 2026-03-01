document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

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
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

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
  if (projectGrid && typeof projectsData !== "undefined") {
    projectsData.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.cursor = "pointer";
      card.innerHTML = `
                <div class="project-icon"><i class="${project.icon}"></i></div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-domain">${project.domain}</p>
                    <p class="project-desc">${project.desc}</p>
                    <a href="${project.github}" target="_blank" class="project-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;

      // Attach click event for the modal
      card.addEventListener("click", (e) => {
        if (e.target.closest(".project-link")) return;

        modalTitle.textContent = project.title;
        modalDomain.textContent = project.domain;
        if (project.detailedDesc) {
          modalDesc.innerHTML = project.detailedDesc;
        } else {
          modalDesc.textContent = project.desc;
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
