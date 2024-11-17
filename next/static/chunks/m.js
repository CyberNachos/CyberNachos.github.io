// 删除页面上的指定元素
(function() {
    console.log("修改脚本加载");
    // 确保文档加载完毕后执行
    document.addEventListener('DOMContentLoaded', function() {
      // 使用 MutationObserver 监听网页变化
      const observer = new MutationObserver(function(mutationsList, observer) {
        // 使用选择器找到需要删除的元素，尝试使用通配符匹配多个类名
        const elements = document.getElementsByClassName('flex');
        
        // 遍历所有找到的元素，检查是否匹配更多特征并删除
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (
            element.classList.contains('md:w-56') &&
            element.classList.contains('grow-0') &&
            element.classList.contains('shrink-0') &&
            element.classList.contains('justify-self-end')
          ) {
            element.remove();
            console.log('元素已被删除');
          }
        }
  
        // 新增删除 img 元素的逻辑
        const imgElements = document.querySelectorAll('img.block.dark\\:hidden.object-contain.size-8');
        imgElements.forEach((imgElement) => {
          imgElement.remove();
          console.log('图片元素已被删除');
        });
  
        // 新增删除 div 元素的逻辑
        const divElements = document.querySelectorAll('div.relative.z-\\[2\\].lg\\:absolute.bottom-0.right-0.left-0.flex.flex-col.pointer-events-none.lg\\:-left-5');
        divElements.forEach((divElement) => {
          divElement.remove();
          console.log('指定的 div 元素已被删除');
        });
      });
  
      // 配置观察选项
      observer.observe(document.body, { childList: true, subtree: true });
    });
  })();
  