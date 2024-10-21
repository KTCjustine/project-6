
document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById("countdown").innerHTML.trim() == 'YOUR ORDER IS RESERVED FOR 10:00') {
        var timeleft = 60 * 10;
        var downloadTimer = setInterval(function function1(){
            var timer = timeleft, minutes, seconds;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            var countElem = document.getElementById("countdown");
            countElem.innerHTML = 'YOUR ORDER IS RESERVED FOR  '+  minutes + ':' + seconds  +' </span>';

            timeleft -= 1;
            var url = window.location.href;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "<span class='lost'>You're time is up.</span>"
            }
        }, 1000);
        
    }
});

// POP UP ANIMATION
const pop = document.querySelector('.pop-up-click');

pop.addEventListener('click', () => {
    const show = document.querySelector('.pop-up-hide');
    show.classList.add('pop-up-show');

    
});