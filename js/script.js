function toggle (columns) {
    const items = document.querySelectorAll(columns)  

    items.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
        })
    })
}
toggle('.block-match__item');
