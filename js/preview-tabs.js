/**
 * Tab carousels for billing and CRM mock previews.
 */
(function () {
  function initCarousel(root) {
    if (!root) return;
    const tabs = root.querySelectorAll("[data-preview-tab]");
    const panels = root.querySelectorAll("[data-preview-panel]");
    if (!tabs.length || !panels.length) return;

    function activate(index) {
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.classList.toggle("is-active", on);
      });
      panels.forEach((panel, i) => {
        const on = i === index;
        panel.hidden = !on;
        panel.setAttribute("aria-hidden", on ? "false" : "true");
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const idx = parseInt(tab.getAttribute("data-preview-tab"), 10);
        if (!Number.isNaN(idx)) activate(idx);
      });
    });

    const prev = root.querySelector("[data-preview-prev]");
    const next = root.querySelector("[data-preview-next]");
    let current = 0;

    function step(delta) {
      current = (current + delta + panels.length) % panels.length;
      activate(current);
    }

    prev?.addEventListener("click", () => step(-1));
    next?.addEventListener("click", () => step(1));
  }

  function init() {
    document
      .querySelectorAll("[data-preview-carousel]")
      .forEach(initCarousel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
