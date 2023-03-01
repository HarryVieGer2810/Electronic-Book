function show() {
    const show = document.getElementById('book')
    const show_btn = document.getElementById('show_btn')
    const hide_btn = document.getElementById('hide_btn')

    show.style.display = 'block';
    show.style.height = '100vh';
    show_btn.style.display = 'none';
    hide_btn.style.display = 'block';

}

function hide() {
    const hide = document.getElementById('book')
    const show_btn = document.getElementById('show_btn')
    const hide_btn = document.getElementById('hide_btn')

    hide.style.display = 'none';

    show_btn.style.display = 'block';
    hide_btn.style.display = 'none';
}