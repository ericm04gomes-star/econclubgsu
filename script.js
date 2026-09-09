(function () {
  var toggle = document.querySelector('.nav__toggle');
  var links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  var groups = Array.prototype.slice.call(document.querySelectorAll('.nav__group'));
  groups.forEach(function (g) {
    var btn = g.querySelector('.nav__link');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = g.classList.contains('is-open');
      groups.forEach(function (o) { o.classList.remove('is-open'); o.querySelector('.nav__link').setAttribute('aria-expanded', 'false'); });
      if (!open) { g.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
    });
    g.addEventListener('mouseenter', function () {
      if (window.matchMedia('(min-width:941px)').matches) g.classList.add('is-open');
    });
    g.addEventListener('mouseleave', function () {
      if (window.matchMedia('(min-width:941px)').matches) g.classList.remove('is-open');
    });
  });
  document.addEventListener('click', function () {
    groups.forEach(function (g) { g.classList.remove('is-open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') groups.forEach(function (g) { g.classList.remove('is-open'); });
  });
})();
