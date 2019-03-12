(function ($) {
    $(document).ready(function () {
    const modalBtns = document.getElementsByClassName('addReviewBtn');
    const form = document.getElementById('addReviewForm');
    function openModal(event) {
        form.classList.toggle('hidden');
    }
    if (modalBtns.length > 0) {
        for (let i = 0; i < modalBtns.length; i++) {
            modalBtns[i].addEventListener('click', openModal);
        }
    }
    
  
    });
  }(jQuery));
  