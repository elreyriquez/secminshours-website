(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );

  function scan() {
    document.querySelectorAll(".scroll-reveal").forEach(function (el) {
      if (el.classList.contains("is-revealed")) return;
      if (reduced) {
        el.classList.add("is-revealed");
        return;
      }
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
})();
