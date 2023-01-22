window.onload = function() {
    window.setInterval(function() {
        var date = new Date();
        
        var hour = date.getHours();
        var min = date.getMinutes();

        var clock = hour + ':' + min;
        document.getElementById("stcl").innerHTML = clock;
    }
    );
}