(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 36px 0px' });

  const reveal = element => {
    if (!element || element.classList.contains('reveal-item')) return;
    element.classList.add('reveal-item');
    observer.observe(element);
  };

  document.querySelectorAll(
    '.home-page .statement-main, .home-page .statement-grid > div, .home-page .edge-bottom, .home-page .plans-intro, .home-page .plan, .home-page .final-cta > :not(.final-art), .mega-footer .footer-message, .mega-footer .footer-links, .newsroom-page .section-heading, .newsroom-page .closing > *'
  ).forEach(reveal);

  const stories = document.querySelector('#stories');
  if (stories) {
    new MutationObserver(() => stories.querySelectorAll('.story-card').forEach(reveal))
      .observe(stories, { childList: true });
    stories.querySelectorAll('.story-card').forEach(reveal);
  }
})();
