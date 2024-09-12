async function getRandomimage() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        if (!res.ok) {
            throw new Error("Ну пиздец, ошибка( не будет босаки(((")
        }
        const data = await res.json();
        if (data) {
            const url = data.message;
            displayDogImage(url);
        }
    } catch {
        console.log(e.message);
    }
}

function displayDogImage(imageUrl) {
    const dogImage= document.getElementById("dog-image");
    dogImage.style.display = "block"
    dogImage.src = imageUrl;
}

