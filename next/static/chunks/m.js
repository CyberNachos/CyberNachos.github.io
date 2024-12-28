// 删除页面上的指定元素
(function() {
  console.log("修改脚本加载");
  // 确保文档加载完毕后执行
  document.addEventListener('DOMContentLoaded', function() {
      // 使用 MutationObserver 监听网页变化
      const observer = new MutationObserver(function(mutationsList, observer) {
          // 删除指定类名组合的元素
          const elements = document.getElementsByClassName('flex');
          for (let i = 0; i < elements.length; i++) {
              const element = elements[i];
              if (
                  element.classList.contains('md:min-w-56') &&
                  element.classList.contains('grow-0') &&
                  element.classList.contains('shrink-0') &&
                  element.classList.contains('justify-self-end')
              ) {
                  element.remove();
                  console.log('元素已被删除');
              }
          }

          // 删除指定的 img 元素
          const imgElements = document.querySelectorAll('img.block.dark\\:hidden.object-contain.size-8');
          imgElements.forEach((imgElement) => {
              imgElement.remove();
              console.log('图片元素已被删除');
          });

          // 删除指定的 nav 元素及其子元素
          const navElements = document.querySelectorAll('nav > ol.flex.flex-wrap.items-center.gap-2');
          navElements.forEach((navElement) => {
              navElement.parentElement.remove(); // 删除整个 nav 元素
              console.log('指定的 nav 元素已被删除');
          });

          // 删除指定的 div 元素（增加新的选择器）
          const divSelectors = [
              'div.relative.z-\\[2\\].lg\\:absolute.bottom-0.right-0.left-0.flex.flex-col.pointer-events-none.lg\\:-left-5',
              'div.some-other-class.some-specific-class' // 添加其他需要匹配的选择器
          ];

          divSelectors.forEach((selector) => {
              const divElements = document.querySelectorAll(selector);
              divElements.forEach((divElement) => {
                  divElement.remove();
                  console.log(`匹配的 div 元素已被删除: ${selector}`);
              });
          });
      });

      // 配置观察选项
      observer.observe(document.body, { childList: true, subtree: true });
  });
})();
