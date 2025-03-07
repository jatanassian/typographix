const themeSwitch = document.getElementById('theme-switch');

function setDarkMode() {
  themeSwitch.children[0].textContent = 'Dark Mode';
  themeSwitch.children[1].classList.replace('fa-sun', 'fa-moon');
}

function setLightMode() {
  themeSwitch.children[0].textContent = 'Light Mode';
  themeSwitch.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (!currentTheme || currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    setDarkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    setLightMode();
  }
}

themeSwitch.addEventListener('click', switchTheme);
