var section01 = document.querySelector('.section01');
var sc01_txt = document.querySelectorAll('.section01 h1 span');
var sc01_line = document.querySelector('.section01 h1 .line');
// 윈도우가 로딩 됐을 때
window.onload = function(){
    section01.classList.add('onload');
    sc01_line.classList.add('ani');
}
// 윈도우 스크롤 이벤트
var section = document.querySelectorAll('.section');
window.addEventListener('scroll', function(){
    var window_sy = window.scrollY;
    // 각 섹션마다 ani 클래스 추가
    for(var i=0; i<section.length; i++){
        if(window_sy >= section[i].offsetTop){
            section[i].classList.add('ani');
        }
    }
});