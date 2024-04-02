//вся логіка роботи додатка
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';

// Отримання елементів DOM
const form = document.querySelector('form');
const searchInput = document.querySelector('#search');

// Обробник події для форми пошуку
form.addEventListener('submit', event => {
  event.preventDefault(); // Заборона стандартної поведінки форми

  const keyword = event.target.elements.search.value.trim(); // Отримання ключового слова для пошуку

  // Перевірка на порожній рядок
  if (keyword === '') {
    displayErrorMessage('Please enter a search keyword');
    return iziToast.error({
      message: 'Please enter a search keyword',
      position: 'topRight',
    });
  }
  // Виконання пошуку зображень за ключовим словом
  searchImages(keyword)
    .then(images => {
      // Відображення отриманих зображень
      displayImages(images);
    })
    .catch(error => {
      console.error('Error searching images:', error);
    });
});