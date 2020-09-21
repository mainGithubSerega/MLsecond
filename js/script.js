function popup (startSel, popapSel, closeSel) {
    const startBtn = document.querySelector(startSel),
          modal = document.querySelector(popapSel),
          finishBtn = document.querySelector(closeSel),
          body = document.body

    startBtn.addEventListener('click', function(e){
        e.preventDefault()
        body.classList.add('lock')
        modal.classList.remove('hide')
    })
    finishBtn.addEventListener('click', function(e){
        e.preventDefault()
        body.classList.remove('lock')
        modal.classList.add('hide')
    })
    modal.addEventListener('click', function(e){
        if(e.target.classList.contains('block-popup')){
            body.classList.remove('lock')
            modal.classList.add('hide')
        }
    })
}
popup('.footer__text', '.block-popup', '.block-popup__close');

