disableFloatingBtn = () => {
    const topButton = document.getElementById('floating-button');
    if(!window.pageYOffset){
        console.log("here");
        topButton.style.visibility = 'hidden';
        topButton.style.opacity = '0';
    }
    else{
        topButton.style.visibility = 'visible';
        topButton.style.opacity = '1';
    }
}
window.addEventListener('scroll', disableFloatingBtn);