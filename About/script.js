function downloadCV() {
    const cvUrl = "../Patricia-Arevalo-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Patricia-Arevalo-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
