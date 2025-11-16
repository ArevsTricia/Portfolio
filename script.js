document.getElementById("year").textContent = new Date().getFullYear();

// Reusable modal functionality
document.querySelectorAll('.websites').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = 'modal-' + card.id; // assumes each card has a unique id
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.setAttribute('aria-hidden', 'false');
        //document.documentElement.style.overflow = 'hidden'; // prevent scroll
    });

    // keyboard accessibility
    card.tabIndex = 0;
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// Close modal logic
document.querySelectorAll('.modal [data-close]').forEach(el => {
    el.addEventListener('click', () => {
        const modal = el.closest('.modal');
        modal.setAttribute('aria-hidden', 'true');
        //document.documentElement.style.overflow = ''; // restore scroll
    });
});

// Optional: close on ESC key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal[aria-hidden="false"]').forEach(modal => {
            modal.setAttribute('aria-hidden', 'true');
            document.documentElement.style.overflow = '';
        });
    }
});

function openGmail() {
    const email = "arevalo.patpat082nd@gmail.com";
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent("Hi Patricia,");
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
}

function downloadCV() {
    const cvUrl = "./CV-AREVALO-PATRICIA.pdf";
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