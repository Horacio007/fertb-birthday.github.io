$(document).ready(function() {

    $('#btn').on('click', function() {
        $('.contenedor').hide(); 
        $('#contenedorMostrar').show(() => {
            const audio = new Audio("./PacMan Original Theme - TheCantinaBand.mp3");
            audio.play();

            const date1 = new Date(); 
                const date2 = new Date('2026/02/16 19:00:00'); 
                renderCountdown(date1, date2)
        }); 
    });

    function renderCountdown(dateStart, dateEnd){
        var currentDate = dateStart.getTime();
        var targetDate = dateEnd.getTime(); // set the countdown date
        var days, hours, minutes, seconds; // variables for time units
        var count = 0;
        var getCountdown = function (c){
              var secondsLeft = ((targetDate - currentDate) / 1000) - c;
              days = pad( Math.floor( secondsLeft / 86400 ) );
              secondsLeft %= 86400;
              hours = pad( Math.floor( secondsLeft / 3600 ) );
              secondsLeft %= 3600;
              minutes = pad( Math.floor( secondsLeft / 60 ) );
              seconds = pad( Math.floor( secondsLeft % 60 ) );
              if(days != 'NaN'){
                $('#tiempo').text(`time left to play => ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
              }
          };
        getCountdown();
        setInterval(function () { getCountdown(count++ ); }.bind(this), 1000);
    }

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

});