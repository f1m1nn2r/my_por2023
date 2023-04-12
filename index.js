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
var section02 = document.querySelector('.section02');
var cursor = document.querySelector('.cursor');
window.addEventListener('scroll', function(){
    var window_sy = window.scrollY;
    //console.log(window_sy);
    // 각 섹션마다 ani 클래스 추가
    for(var i=0; i<section.length; i++){
        if(window_sy >= section[i].offsetTop){
            section[i].classList.add('ani');
        }
    }

    // 스크롤 값이 섹션02 works에 위치할 때 body에 클래스 추가 
    if(window.scrollY >= section02.offsetTop){
        document.body.classList.add('cursor_active');
    }else{
        document.body.classList.remove('cursor_active');
    }
    // body에 cursor_active 클래스 존재 시 cursor 태그에 클래스 추가
    if(document.body.classList.contains('cursor_active') === true){
        cursor.classList.add('active');
    }else{
        cursor.classList.remove('active');
    }
    
});
// 섹션02 위치할 때 커스텀한 커서 모양 노출되도록 
document.addEventListener('DOMContentLoaded', function(){
    document.body.onmousemove = function(e){
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});
// 섹션02 각각의 li 호버 시 스크롤 값 변경되도록
var section02_li = document.querySelectorAll('.section02-inner ul li');
for(var i=0; i<section02_li.length; i++){
    section02_li[i].addEventListener('mouseover', function(e){
        var this_li = this;
        /*
        var percent = e.clientY / window.innerHeight;
        var section02_inner = document.querySelector('.section02-inner');
        section02_inner.animate({
            transform: `translateY(${percent * section02_inner.offsetHeight * -1}px)`
        }, {
            fill:"forwards",
            duration:4000,
        })
        */
        var this_li_top = this_li.getBoundingClientRect().top + window.pageYOffset / 1.05;
        console.log(this_li_top);
        window.scroll({top:this_li_top, behavior:'smooth'});
    });
}
