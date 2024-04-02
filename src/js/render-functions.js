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
    galleryElement.appendChild(imageCard);
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
  const card = document.createElement('div');
  card.classList.add('image-card');

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  const likes = document.createElement('p');
  likes.textContent = `Likes: ${image.likes}`;

  const views = document.createElement('p');
  views.textContent = `Views: ${image.views}`;

  const comments = document.createElement('p');
  comments.textContent = `Comments: ${image.comments}`;

  const downloads = document.createElement('p');
  downloads.textContent = `Downloads: ${image.downloads}`;

  // Додати посилання на оригінальне зображення
  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.appendChild(img);

  card.appendChild(link);
  card.appendChild(likes);
  card.appendChild(views);
  card.appendChild(comments);
  card.appendChild(downloads);

  return card;
}
