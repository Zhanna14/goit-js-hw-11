import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Spinner } from 'spin.js';

let spinner = null; // Змінна для зберігання індикатора завантаження
let instance = null; // Змінна для зберігання екземпляру SimpleLightbox

// Функція для створення нового екземпляру SimpleLightbox
function createSimpleLightbox() {
  instance = new SimpleLightbox('#gallery a', {
    captionDelay: 250, // зображення підпису за 250 ms
    captionsData: 'alt', // підпис зображення
  });
}

// Функція для створення і показу індикатора завантаження
function showLoader() {
  spinner = new Spinner().spin();
  document.getElementById('loader').appendChild(spinner.el);
}

// Функція для приховування індикатора завантаження
function hideLoader() {
  if (spinner) {
    spinner.stop();
    document.getElementById('loader').innerHTML = ''; // Очищаємо контейнер індикатора завантаження
  }
}

export function displayImages(images) {
  showLoader(); // Показуємо індикатор завантаження перед відображенням зображень

  const galleryElement = document.getElementById('gallery');
  galleryElement.innerHTML = ''; // Очищаємо галерею перед відображенням нових зображень

  images.forEach(image => {
    const imageCard = createImageCard(image);
    galleryElement.insertAdjacentHTML('beforeend', imageCard);
  });

  hideLoader(); // Приховуємо індикатор завантаження після відображення зображень

  // Оновлюємо галерею, тільки якщо були додані нові картки зображень
  if (!instance) {
    createSimpleLightbox(); // Якщо екземпляр не існує, створюємо новий
  } else {
    instance.refresh(); // Якщо екземпляр вже існує, оновлюємо його
  }
}

// Створення картки зображення
function createImageCard(image) {
  return `<div class="card">
  <div class="image-container">
    <img
      src="${image.webformatURL}"
      alt="${image.tags}"
      class="image"
    />
  </div>
  <div class="options">
      <h2 class="options-name">Likes</h2>
      <h2 class="options-name">Views</h2>
      <h2 class="options-name">Comments</h2>
      <h2 class="options-name">Downloads</h2>
    </div>

    <div class="description">
      <p class="value-description">${image.likes}</p>
      <p class="value-description">${image.views}</p>
      <p class="value-description">${image.comments}</p>
      <p class="value-description">${image.downloads}</p>

    </div>
  </div>
</div>`;
}