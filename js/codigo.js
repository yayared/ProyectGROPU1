function changeImage(thumbnail, imageUrl) {
    const mainImage = document.getElementById("main-img");
    
    // Quita la clase "active" de todas las miniaturas
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb) => {
        thumb.classList.remove("active");
    });

    // Cambia la imagen principal
    mainImage.src = imageUrl;

    // Agrega la clase "active" solo a la miniatura seleccionada
    thumbnail.classList.add("active");
}
