//вся логіка роботи додатка

import { searchImages } from './js/pixabay-api.js';
import { displayImages, displayErrorMessage } from './js/render-functions.js';

// Отримання елементів DOM
const form = document.querySelector('form');
const searchInput = document.querySelector('#search-input');

// Обробник події для форми пошуку
form.addEventListener('submit', async event => {
  event.preventDefault(); // Заборона стандартної поведінки форми

  const keyword = searchInput.value.trim(); // Отримання ключового слова для пошуку

  // Перевірка на порожній рядок
  if (keyword === '') {
    displayErrorMessage('Please enter a search keyword');
    return;
  }

  try {
    // Виконання пошуку зображень за ключовим словом
    const images = await searchImages(keyword);

    // Відображення отриманих зображень
    displayImages(images);
  } catch (error) {
    console.error('Error searching images:', error);
    displayErrorMessage('An error occurred while searching for images');
  }
});