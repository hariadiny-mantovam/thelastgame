document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const links = document.querySelectorAll('.nav-list a');

  toggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });


  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});