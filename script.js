// ---------- DOM Ready ----------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const statusMessage = document.querySelector("#formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grab form values
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        showStatus("⚠️ Please fill out all fields.", "error");
        return;
      }

      if (!validateEmail(email)) {
        showStatus("❌ Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission success
      showStatus("✅ Thank you! Your message has been sent.", "success");

      // Reset form
      form.reset();
    });
  }

  // Helper function to show status messages
  function showStatus(message, type) {
    if (!statusMessage) return;
    statusMessage.textContent = message;
    statusMessage.className = type; // will use CSS .success or .error
  }

  // Email validation regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
