(function () {
    const path = location.pathname.replace(/\/index\.html$/, "/");
    document.querySelectorAll("nav a").forEach((a) => {
      try {
        const href = new URL(a.href).pathname.replace(/\/index\.html$/, "/");
        if (href === path) a.classList.add("active");
      } catch (_) {}
    });
  
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  })();