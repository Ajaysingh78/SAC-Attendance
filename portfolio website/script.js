document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            const fullImage = document.createElement("img");
            fullImage.src = img.src;
            fullImage.classList.add("full-image");
            overlay.appendChild(fullImage);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });
});
