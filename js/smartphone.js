/**
 * Created by Administrator on 16-12-5.
 */
function $(e) {
    return document.querySelector(e)
}
function $$(e) {
    return document.querySelectorAll(e)
}
function setHeight(setH,getH) {
    setH.style.height=getH.clientHeight+'px';
}
function loadHeight(setH,getH) {
    setHeight(setH,getH);
    window.onresize=function () {
        setHeight(setH,getH);
    }
}

window.onload=function () {

    loadHeight($('.lunbo ul:first-child'), $('.lunbo ul:first-child img '));

    $('.nav-left').onclick = function () {
        if ($('.sea').offsetTop != 67) {
            $('.sea').style.top = '67px';
        }
        else {
            $('.sea').style.top = '-530px';

        }
    };


    var a = 0;
    (function(){setInterval(function () {
        a++;
        if (a > 2) {
            a = 0
        }
        for (var i = 0; i < 3; i++) {
            $$('.lunbo ul:first-child li')[i].style.opacity = 0;
            $$('.lunbo ul:last-child li')[i].setAttribute('class', '')
        }
        $$('.lunbo ul:first-child li')[a].style.opacity = 1;
        $$('.lunbo ul:last-child li')[a].setAttribute('class', 'blacka')
    }, 1000);})();


    for(var i = 0; i < $$('.shou div').length; i++) {

        $$('.shou div')[i].setAttribute('index', i);

        $$('.shou div')[i].onclick = function () {

            if ($$('.shou h5')[this.getAttribute('index')].style.display=='block') {
                $$('.shou h5')[this.getAttribute('index')].style.display = 'none';
                $$('.shou div span')[this.getAttribute('index')].style.transform = '';
            } else {
                for (var j = 0; j < $$('.shou>div').length; j++) {
                 if( $$('.shou h5')[j].style.display == 'block'){
                     $$('.shou h5')[j].style.display = 'none';
                     $$('.shou div span')[j].style.transform = '';
                 }

                }
                $$('.shou h5')[this.getAttribute('index')].style.display = 'block';
                $$('.shou div span')[this.getAttribute('index')].style.transform = 'rotate(180deg)';
            }


        }
    }

};


