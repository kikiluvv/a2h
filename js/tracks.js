window.onload = function(){ 
    let button = document.querySelector('.view-button');
    let container = document.querySelector('.track-container');
    let footer = document.querySelector('.footer');
    let hidden = document.querySelector('.mobile-hide')

    button.onclick = () => {
	container.classList.toggle('toggle');
    button.classList.toggle('btoggle')
    footer.classList.toggle('ftoggle')
    hidden.classList.toggle('htoggle')
    }
};


