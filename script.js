var ball = document.getElementById('ball');

ball.onclick = function(e) {

    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    document.body.appendChild(ball);
    moveAt(e);


    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    ball.onclick = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    };

}

ball.ondragstart = function() {
    return false;
};

function getCoords(elem) {   
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

// изменение цвета
ball.addEventListener("mousemove", function(event) {
    // console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    ball.style.backgroundColor = "rgb("+x+","+y+", 100)";
});
