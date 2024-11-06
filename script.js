function changeCategory(category) {
    const bikeImage = document.getElementById('bikeImage');
    const categories = document.querySelectorAll('.categories li');

    // Remove active state from all categories and add to the selected one
    categories.forEach(cat => cat.classList.remove('active'));
    document.getElementById(category).classList.add('active');

    // Apply animation class for transition effect
    bikeImage.classList.add('fade-out');

    // Change image source after the fade-out transition completes
    setTimeout(() => {
        if (category === 'electric') {
            bikeImage.src = "/electricbike.png";
            document.body.style.backgroundColor = "#b49057";
        } else if (category === 'road') {
            bikeImage.src = "/roadbike.png";
            document.body.style.backgroundColor = "#54a29f";
        } else if (category === 'mountain') {
            bikeImage.src = "/mountainbike.png";
            document.body.style.backgroundColor = "#7fb457";
        }
        bikeImage.classList.remove('fade-out');
        bikeImage.classList.add('fade-in');
    }, 300); // Timing matches the fade-out duration

    // Remove fade-in class after animation completes
    setTimeout(() => {
        bikeImage.classList.remove('fade-in');
    }, 600); // Total timing for fade-out and fade-in
}
