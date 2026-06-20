// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTERING LOGIC ---
    const filterButtons = document.querySelectorAll(".btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and add to the clicked one
            document.querySelector(".btn.active").classList.remove("active");
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            galleryItems.forEach(item => {
                // If 'all' is selected or the item has the matching category class
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block"; // Show item
                } else {
                    item.style.display = "none";  // Hide item
                }
            });
        });
    });

    // --- 2. LIGHTBOX INTERACTIVITY ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    // Open Lightbox when an image container is clicked
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const clickedImgSrc = item.querySelector("img").getAttribute("src");
            const clickedImgAlt = item.querySelector("img").getAttribute("alt");
            
            lightboxImg.setAttribute("src", clickedImgSrc);
            lightboxImg.setAttribute("alt", clickedImgAlt);
            lightbox.style.display = "flex"; // Show the modal overlay
        });
    });

    // Close Lightbox when clicking the "X" button
    closeBtn.addEventListener("click", () => {
        lightbox.style.style.display = "none";
    });

    // Close Lightbox when clicking anywhere outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
