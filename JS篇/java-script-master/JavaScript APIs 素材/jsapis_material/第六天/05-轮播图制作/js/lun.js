window.addEventListener('load',function(){

    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');

    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    });


    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
     
    });



//显示切换圈的个数，是根据图片的数量来修改,动态生成，检测图片个数进append
let ul=focus.querySelector('ul')
let ol=focus.querySelector('.circle')


//小圆圈制作部分 添加个数就是图片个数
for(let i=0;i<ul.children.length;i++){
    //被添加元素得用一次创建一次 
    let li =document.querySelector('li')
   //在ol小圆点盒子里添加小圆点
    ol.appendChild(li)
    
//插入元素的同时绑定元素，
li.addEventListener('click',function(){
    //排他思想实现效果 
for(let z=0;z<ol.children.length;z++){
    ol.children[z].className=''
}
this.className='current'
})
    
}

//添加默认背景样式
/* ol.children[0].className='current' */


})