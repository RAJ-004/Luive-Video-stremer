// Function to open video page with the selected video
function openVideo(videoSrc) {
  localStorage.setItem("currentVideo", videoSrc);
  window.location.href = "video.html";
}

// On the video.html page, load the selected video
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("mainVideo");
  const currentVideo = localStorage.getItem("currentVideo");

  if (video && currentVideo) {
    video.src = currentVideo; // Load directly from localStorage
    video.play(); // Autoplay the video
  }
});

// Change video when recommendation is clicked
function changeVideo(newVideo) {
  const video = document.getElementById("mainVideo");
  if (video) {
    video.src = newVideo;
    video.play();
    localStorage.setItem("currentVideo", newVideo); // Update the current video
  }
}

// Add a live comment
function addComment() {
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");

  if (commentInput.value.trim() !== "") {
    const li = document.createElement("li");
    const now = new Date();
    li.textContent = `[${now.getHours()}:${now.getMinutes()}] ${commentInput.value}`;
    commentList.appendChild(li);

    commentInput.value = "";
    commentList.scrollTop = commentList.scrollHeight; // Scroll to the latest comment
  }
}
