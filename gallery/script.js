// Modal logic
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.title = 'Click to enlarge';

  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;

    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create image
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = 'Enlarged abstract image';

    // Add modal to page
    modal.appendChild(imgElement);
    document.body.appendChild(modal);
    setTimeout(() => imgElement.classList.add('reveal'), 10);

    // Modal removal event
    modal.addEventListener('click', () => {
      imgElement.classList.remove('reveal');
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
  });
});

// Check if page is scrolled and adjust the olog size
function checkScroll() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  let scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let newSize = 3 - scrollPosition * 0.03; // Decrease by 0.03rem for every 1px scrolled

  // Clamping the font-size between 1.5rem and 3 rem;
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);

  logo.style.fontSize = newSize + 'rem';
}

window.addEventListener('scroll', checkScroll);
