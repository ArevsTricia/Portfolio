function openGmail() {
    const email = "arevalo.patpat082nd@gmail.com";
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent("Hi Patricia,");
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
}

function downloadCV() {
    const cvUrl = "./Patricia-Arevalo-CV.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Patricia-Arevalo-CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}