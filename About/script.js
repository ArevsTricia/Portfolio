function downloadCV() {
    const cvUrl = "../Patricia-Arevalo-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Patricia-Arevalo-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".mobile-sidebar");
const overlay = document.querySelector(".sidebar-overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});