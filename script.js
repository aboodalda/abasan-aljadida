// عبسان الجديدة — حركة ظهور خفيفة عند التمرير
(function () {
  // نفعّل الإخفاء المبدئي فقط إذا الجافاسكربت شغّال، حتى يبقى المحتوى
  // ظاهرًا بشكل طبيعي لو تعطّل الجافاسكربت لأي سبب
  document.documentElement.classList.add('js-reveal');

  if (!('IntersectionObserver' in window)) {
    // متصفح قديم لا يدعم IntersectionObserver: أظهر كل شيء مباشرة
    document.documentElement.classList.remove('js-reveal');
    return;
  }

  var selector = '.prose-card, .cta-block, .doc-frame, .verify-box, ' +
                 '.section-head, .fact, .photo-slot, .empty-card, .content-card, ' +
                 '.person-card, .person-slot';
  var targets = document.querySelectorAll(selector);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (t) { observer.observe(t); });
})();
