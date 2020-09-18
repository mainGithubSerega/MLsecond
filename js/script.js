function toggle (columns) {
    const items = document.querySelectorAll(columns)  

    items.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
        })
    })
}
toggle('.block-match__item');
const btn = document.querySelector('.footer__text')
const popap = document.querySelector('.block-popup')
const body = document.body
btn.addEventListener('click', function(e){
    e.preventDefault()
    popap.classList.remove('hide')
    body.classList.add('lock')
})
const close = document.querySelector('.block-popup__close')
close.addEventListener('click', function(){
    popap.classList.add('hide')
    body.classList.remove('lock')
});

