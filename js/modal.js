(function ($) {
    $(document).ready(function () {
    const modalBtns = document.getElementsByClassName('addReviewBtn');
    const form = document.getElementById('addReviewForm');
    const body = document.getElementsByTagName('BODY')[0];
    const btn = document.getElementById('closeFormBtn');
    const star = `&#9733;`;
    const emptyStar = `&#9734;`;

    const ratingSelect = document.getElementById('edit-rating');
    const options = [...ratingSelect.querySelectorAll('option')];
    options.forEach(option => {
        const value = option.value;
        const stars = [];
        for (let i = 0; i < value; i++) {
            stars.push(star);
        }
        for (let i = 0; i < 5 - value; i++) {
            stars.push(emptyStar);
        }
        option.innerHTML = stars;
    })



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
