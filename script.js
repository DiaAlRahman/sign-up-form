window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".signup").addEventListener("submit", function(e) {
    const email = this.user_mail.value;
    const password = this.user_pass.value;
    if (email === "admin@sketch.com" && password === "admin123") {
      this.action = "./etch-a-sketch/index.html";
    } else {
      e.preventDefault();
      alert("Invalid credentials");
    }
  })
})