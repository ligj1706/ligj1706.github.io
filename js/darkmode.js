document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkmode-toggle');
  const htmlElement = document.documentElement;
  const darkModeClass = 'dark-mode';
  
  // 检查本地存储的主题设置
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlElement.classList.add(darkModeClass);
  }

  // 切换主题
  darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle(darkModeClass);
    
    if (htmlElement.classList.contains(darkModeClass)) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
