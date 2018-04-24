// var R2D2 = document.getElementById('R2D2');
var R2D2 = $('#R2D2');
var juodas = $('#juodas');

var topPadetis = 0;
var pad = 0;
x=100;
function zemyn() {

    topPadetis += x;
    if(topPadetis>500){
        topPadetis=100;
    }
    R2D2.css('top', topPadetis + "px");
    console.log(isCollide(juodas, R2D2));
}

function aukstyn() {
    topPadetis -= x;
    if(topPadetis<100){
        topPadetis=500;
    }

    R2D2.css('top', topPadetis + "px");
    console.log(isCollide(juodas, R2D2));
}

function kairen() {
    pad += x;

    if(pad>700){
        pad=0;
    }
    R2D2.css('left', pad + "px");
    console.log(isCollide(juodas, R2D2));
}

function desinen() {
    pad -= x;
    if(pad<0){
        pad=700;
    }

    R2D2.css('left', pad + "px");
    console.log(isCollide(juodas, R2D2));
}

// function zemyn(){
//     topPadetis += 100;
//     R2D2.style.top = topPadetis + "px";
// }
// function aukstyn(){
//     topPadetis -= 100;
//     R2D2.style.top = topPadetis + "px";
// }
//
// function kairen(){
//     pad += 100;
//     R2D2.style.left = pad + "px";
// }function desinen(){
//     pad -= 100;
//     R2D2.style.left = pad + "px";
// }


// document.getElementById('profiliofoto').onclick=function(){
//     alert('paspaudei');
// }


document.getElementById('down').onclick = function () {
    zemyn();
};

document.getElementById('up').onclick = function () {
    aukstyn();
};

document.getElementById('right').onclick = function () {
    kairen();
};

document.getElementById('left').onclick = function () {
    desinen();
};

document.onkeyup = function (e) {
    if (e.keyCode == 37) {
        desinen();
    }

    if (e.keyCode == 38) {
        aukstyn();
    }

    if (e.keyCode == 39) {

        kairen();
    }

    if (e.keyCode == 40) {
        zemyn();
    }
};



var isCollide = function() {

    $div2 = $('#R2D2');
   var state=false;
    $('.juoda').each(function (index) {
        $div1 = $(this);


        // Div 1 data
        var d1_offset = $div1.offset();
        var d1_height = $div1.outerHeight(true);
        var d1_width = $div1.outerWidth(true);
        var d1_distance_from_top = d1_offset.top + d1_height;
        var d1_distance_from_left = d1_offset.left + d1_width;

        // Div 2 data
        var d2_offset = $div2.offset();
        var d2_height = $div2.outerHeight(true);
        var d2_width = $div2.outerWidth(true);
        var d2_distance_from_top = d2_offset.top + d2_height;
        var d2_distance_from_left = d2_offset.left + d2_width;

        var not_colliding = (d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left);

        if (!not_colliding) {
            return true;
        }
    });
    return state;
};

function arMirtis() {
    if(isCollide()){
        sachmatai.css('background',"url('/img/boom.gif')");
    }
}