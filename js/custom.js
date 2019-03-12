(function ($) {
  $(document).ready(function () {
    const tabContainer = document.getElementsByClassName('content-tabs')[0];
    const tabs = [...tabContainer.querySelectorAll('.content-tabs-item a')];
    const contentItems = [...document.getElementsByClassName('content-tabs-cont-item')];

    function tabClick(event) {
      event.preventDefault();
      const link = event.target;
      if (!link.classList.contains('is-active')) {
        const sectionName = link.href.split('#')[1];
        tabs.forEach(tab => {
          if (tab.href === link.href) {
            tab.classList.add('is-active');
          } else {
            tab.classList.remove('is-active');
          }
        });
        contentItems.forEach(item => {
          if (item.id === sectionName) {
            if (item.classList.contains('hidden')) {
              item.classList.remove('hidden');
            }
          } else {
            item.classList.add('hidden');
          }
        });
      }
    }

    if (tabs.length > 0) {
      $('.content-tabs a').unbind();
      tabs.forEach(tab => {
        tab.addEventListener('click', tabClick);
      });
    }

  });
}(jQuery));
