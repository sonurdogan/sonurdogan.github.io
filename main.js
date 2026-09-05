(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
