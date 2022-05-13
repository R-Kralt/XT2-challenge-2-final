 
function initClock() {
    var clock = document.getElementById('clock');
    var time = getCurrentTime(new Date());


//display time
    clock.innerHTML = time['hours'] + ':' + time['minutes'] + ':' + time['seconds'];
}

function getCurrentTime() {
    var date = new Date();
    var time = new Array;

    time['seconds'] = date.getSeconds();
    time['minutes'] = date.getMinutes();
    time['hours'] = date.getHours();

    if (time['hours'] < 10) {
        time['hours'] = '0' + time['hours'];
    }

    if (time['minutes'] < 10) {
        time['minutes'] = '0' + time['minutes'];
    }

    if (time['seconds'] < 10) {
        time['seconds'] = '0' + time['seconds'];
    }

//nacht
    if (time['hours'] >= 20 || time['hours'] < 7) {
        document.getElementById("zon").src = "images/maan.png";
        document.getElementById("aardedag").src = "images/aardenacht.png";
     }

//remove bg
    if (time['hours'] >= 7 && time['hours'] < 20) {
        document.getElementById("sterren").style.display='none';
        document.getElementById("zon").src = "images/zon.png";
        document.getElementById("aardedag").src = "images/aarde.png";
    }

//date
    var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    document.getElementById('date').innerHTML = maanden[date.getMonth()] + ' ' + date.getDate();


    return time;
}

initClock();

setInterval(initClock, 1000);