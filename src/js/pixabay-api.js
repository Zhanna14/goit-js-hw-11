//функції для HTTP-запитів

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Функція для виконання HTTP-запитів до API Pixabay
export async function searchImages(keyword) {
    const apiKey = '43190537-4b40a622c8cb8590492e33b18'; // Замініть 'YOUR_API_KEY' на ваш ключ API Pixabay
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        if (data.hits.length === 0) {
            iziToast.error({
              title: 'Sorry',
              message:
                'There are no images matching your search query. Please try again!',
              position: 'topRight',
            });
        }
        return data.hits; // Повертаємо масив об'єктів зображень
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error; // Пропагуємо помилку наверх для обробки в main.js
    }
}

