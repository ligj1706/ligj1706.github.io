document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.site-nav-toggle');
  const menu = document.querySelector('.site-nav ul.menu');
  
  if (toggle && menu) {
    // 添加调试信息
    console.log('找到菜单元素:', toggle, menu);
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('汉堡菜单被点击');
      
      // 切换菜单显示状态
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
        // 设置菜单位置
        menu.style.position = 'absolute';
        menu.style.top = '100%';
        menu.style.left = '0';
        menu.style.width = '100%';
        menu.style.zIndex = '999';
      }
    });
    
    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(e) {
      if (menu.style.display === 'block' && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  } else {
    console.error('未找到菜单元素:', toggle, menu);
  }
}); 