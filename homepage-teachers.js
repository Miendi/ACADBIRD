document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".class-card.yellow").forEach(card => {
        card.addEventListener("click", () => {
            alert(`Opening ${card.querySelector(".class-name").innerText}`);
        });
    });

    document.querySelector(".class-card.green").addEventListener("click", () => {
        const newClassName = prompt("Enter new class name:");
        if (newClassName) {
            alert(`Class "${newClassName}" created!`);
        }
    });
});
