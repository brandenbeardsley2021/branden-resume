(function() {
  var hamburger = document.querySelector('.nav-hamburger');
  var links = document.querySelector('.nav-links');
  var dropdowns = document.querySelectorAll('.nav-dropdown');

  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      links.classList.toggle('open');
    });
  }

  dropdowns.forEach(function(dd) {
    var link = dd.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dd.classList.toggle('open');
        }
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(function(dd) { dd.classList.remove('open'); });
    }
    if (!e.target.closest('.nav-in')) {
      if (links) links.classList.remove('open');
    }
  });
})();
