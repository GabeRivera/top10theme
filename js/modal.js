(function ($) {
    $(document).ready(function () {
    const modalBtns = document.getElementsByClassName('addReviewBtn');
    const form = document.getElementById('addReviewForm');
    const body = document.getElementsByTagName('BODY')[0];
    const btn = document.getElementById('closeFormBtn');
    function openModal(event) {
        form.classList.toggle('hidden');
        body.classList.toggle('stuck');
    }
    if (modalBtns.length > 0) {
        for (let i = 0; i < modalBtns.length; i++) {
            modalBtns[i].addEventListener('click', openModal);
        }
        btn.addEventListener('click', openModal)
    }
    });
  }(jQuery));
