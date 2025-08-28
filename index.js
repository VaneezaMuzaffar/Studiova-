// Sidebar toggle
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const closeSidebar = document.getElementById("closeSidebar");

    menuToggle.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });

    // Smooth close sidebar when clicking link
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    });

    // Modal
const authModal = document.getElementById("authModal");
const openSignin = document.getElementById("openSignin");
const openSignup = document.getElementById("openSignup");
const modalTitle = document.getElementById("modalTitle");
const nameField = document.getElementById("nameField");
const authBtn = document.getElementById("authBtn"); // Continue button
const emailField = document.querySelector('input[type="email"]');
const passwordField = document.querySelector('input[type="password"]');

// Open Sign In modal
openSignin.addEventListener("click", () => {
  authModal.classList.add("active");
  modalTitle.textContent = "Sign In";
  nameField.style.display = "none";

  // Auto-fill from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    emailField.value = user.email || "";
    passwordField.value = user.password || "";
  }
});

// Open Sign Up modal
openSignup.addEventListener("click", () => {
  authModal.classList.add("active");
  modalTitle.textContent = "Sign Up";
  nameField.style.display = "block";

  // Auto-fill from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    nameField.value = user.name || "";
    emailField.value = user.email || "";
    passwordField.value = user.password || "";
  }
});

// Close modal when clicking outside
authModal.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.classList.remove("active");
  }
});

// ✅ Continue button logic (with localStorage save)
authBtn.addEventListener("click", () => {
  const name = nameField.value;
  const email = emailField.value;
  const password = passwordField.value;

  if (modalTitle.textContent === "Sign Up" && name.trim() === "") {
    alert("Please enter your name to sign up.");
    return;
  }

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Save to localStorage
  localStorage.setItem(
    "user",
    JSON.stringify({ name, email, password })
  );

  alert(`✅ Data saved!\nMode: ${modalTitle.textContent}\nEmail: ${email}`);

  authModal.classList.remove("active"); // Close modal
});

    // featured projects
     // Drag scroll for card row
    const row = document.getElementById("cardRow");
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", (e) => {
      isDown = true;
      row.classList.add("active");
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });
    row.addEventListener("mouseleave", () => {
      isDown = false;
    });
    row.addEventListener("mouseup", () => {
      isDown = false;
    });
    row.addEventListener("mousemove", (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      row.scrollLeft = scrollLeft - walk;
    });
    // contact section
     // Save form data when submitted
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // For demo: log data (you can send this to server or localStorage)
    console.log("Saved Data:", { name, email, message });

    alert("Message saved! (Check console for data)");
    this.reset();
  });