let maskClickCounter = false;
const regions = document.querySelectorAll('li[data-telephone-country="true"]')
const phoneInput = document.querySelector('input[data-type="phone"]')

regions.forEach(region => {
    region.addEventListener('click', () => {
        phoneInput.dataset.inputmask = `'mask':'${region.dataset.mask}', 'placeholder' : '${region.dataset.placeholder}', 'removeMaskOnSubmit': 'true','showMaskOnFocus': 'false'`
        $('input[data-type="phone"]').inputmask()
    })
})

$('input[data-type="phone"]').on('change', function () {
    var it = $(this);
    setTimeout(function () {
        // console.log('change');

        if (!it.hasClass('IP-mask')) {
            console.log(it.val().slice(0, 1))
            if ((it.val().length >= 11 && (it.val().slice(0, 1) == '7')) || (it.val().length >= 11 && it.val().slice(0, 1) == '8')) {
                console.log('a')
                it.val(it.val().slice(1));
            }

            $('input[data-type="phone"]').inputmask({
                // "mask": "+7 (999) 999-99-99",
                "mask": "+7 (999) 999-99-99",
                "placeholder": "+7 (___) ___ __ __",
                "removeMaskOnSubmit": true,
                "showMaskOnFocus": false
            });

            it.addClass('IP-mask');
        }
    }, 20);
});
$('input[data-type="phone"]').on('blur', function () {
    var it = $(this);

    setTimeout(function () {
        // console.log('blur');

        $('input[data-type="phone"]').inputmask('remove');

        it.removeClass('IP-mask');
    }, 50);
});

//Работа листа стран
let caret = document.querySelector(".list-mask__caret")
let list = document.querySelector(".list-mask__list")

caret.addEventListener('click', () => {
    caret.classList.toggle('active')
    list.classList.toggle('active')
})