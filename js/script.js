// Simple script to add a fade‑in effect when the video loads

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('introVideo');
  if (video) {
    video.addEventListener('loadeddata', () => {
      video.style.opacity = '0';
      video.style.transition = 'opacity 0.6s ease-in-out';
      requestAnimationFrame(() => {
        video.style.opacity = '1';
      });
    });
  }
});
