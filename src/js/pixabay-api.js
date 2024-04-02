//функції для HTTP-запитів

export async function searchImages(keyword) {
    const apiKey = '43190537-4b40a622c8cb8590492e33b18'; // Замініть 'YOUR_API_KEY' на ваш ключ API Pixabay
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(keyword)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.hits; // Повертаємо масив об'єктів зображень
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error; // Пропагуємо помилку наверх для обробки в main.js
    }
}