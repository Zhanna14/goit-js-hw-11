//функції для відображення елементів інтерфейсу

// Функція для відображення зображень в галереї
export function displayImages(images) {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = ''; // Очищаємо галерею перед відображенням нових зображень

    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.webformatURL;
        imageElement.alt = image.tags;
        galleryElement.appendChild(imageElement);
    });
}

// Функція для відображення повідомлення про помилку
export function displayErrorMessage(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = ''; // Очищаємо галерею перед відображенням повідомлення про помилку
    galleryElement.appendChild(errorElement);
}