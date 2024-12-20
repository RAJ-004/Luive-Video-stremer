// Ensure the user is logged in before allowing access
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn || isLoggedIn !== "true") {
    window.location.href = "login.html";
}

// Function to open video page with the selected video
function openVideo(videoSrc) {
<<<<<<< HEAD
    localStorage.setItem("currentVideo", videoSrc);
    window.location.href = "video.html";
=======
  localStorage.setItem("currentVideo", videoSrc);
  window.location.href = "./video.html";
>>>>>>> a165bce0d12c385d03702ce97086d912f42fe279
}

// On the video.html page, load the selected video
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("mainVideo");
    const currentVideo = localStorage.getItem("currentVideo");

<<<<<<< HEAD
    if (video && currentVideo) {
        video.src = currentVideo; // Load directly from localStorage
        video.play(); // Autoplay the video
    }
=======
  if (video && currentVideo) {
    video.src = currentVideo; // Load directly from localStorage
    video.play(); // Autoplay the video
  }  else if (video) {
    video.src = ""; // Optional: Set to a default or empty source
    console.warn("No video selected or found.");
  }
>>>>>>> a165bce0d12c385d03702ce97086d912f42fe279
});

// Change video when a recommendation is clicked
function changeVideo(newVideo) {
    const video = document.getElementById("mainVideo");
    if (video) {
        video.src = newVideo;
        video.play();
        localStorage.setItem("currentVideo", newVideo); // Update the current video
    }
}

// Display user info if logged in
const username = localStorage.getItem("loggedInUser");
if (username) {
    const header = document.querySelector("header");
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    userInfo.style.float = "right";
    userInfo.style.marginRight = "20px";
    userInfo.style.color = "#ffffff";
    userInfo.innerHTML = `
        <span onclick="toggleDropdown()">Welcome, ${username} ▼</span>
        <div id="dropdown" class="dropdown hidden">
            <a href="#" onclick="logout()">Logout</a>
        </div>
    `;
    header.appendChild(userInfo);
}

// Toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
        dropdown.classList.toggle("hidden");
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser"); // Clear the stored username
    window.location.href = "login.html"; // Redirect to login page
}

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown");
    const userInfo = document.querySelector(".user-info");

    if (dropdown && !userInfo.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});

// Add a live comment
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    if (commentInput && commentInput.value.trim() !== "") {
        const li = document.createElement("li");
        const now = new Date();
        li.textContent = `[${now.getHours()}:${now.getMinutes()}] ${commentInput.value}`;
        commentList.appendChild(li);

        commentInput.value = "";
        commentList.scrollTop = commentList.scrollHeight; // Scroll to the latest comment
    }
}
