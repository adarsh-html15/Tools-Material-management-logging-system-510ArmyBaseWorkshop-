document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('introVideo');
  const revealItems = document.querySelectorAll('.reveal');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const themeIcon = document.querySelector('.theme-icon');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const setTheme = (isDark) => {
    document.body.classList.toggle('dark-theme', isDark);
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    themeLabel.textContent = isDark ? 'Light' : 'Dark';
    themeIcon.textContent = isDark ? '☀' : '☾';
    themeColor.setAttribute('content', isDark ? '#0d1628' : '#f5f8ff');
  };

  // The showcase opens in dark mode by default; the switch remains available for previewing light mode.
  setTheme(true);
  themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
    localStorage.setItem('tmms-theme', isDark ? 'dark' : 'light');
  });

  const reveal = (entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });

  const observer = new IntersectionObserver(reveal, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));

  if (video) {
    const showVideo = () => { video.style.opacity = '1'; };
    video.addEventListener('loadeddata', showVideo, { once: true });
    video.addEventListener('error', showVideo, { once: true });
  }
});
