var spanText = document.getElementById('tooltip');
window.onmouseover = function(e){
    var x = e.clientX,
        y = e.clientY;
        spanText.style.top = (y + 20) + 'px';
        spanText.style.left = (x + 20) + 'px';
}