var theaf =document.querySelector('.theaf');
theaf.addEventListener('mouseover',function(){
    var maxheight = window.innerHeight;
    var maxwidth = window.innerWidth;
    var x = 100000000;
    var y = 100000000;
    while(x>maxheight || y>maxwidth){
        var x = Math.floor((Math.random()*10000)+ 1);
        var y = Math.floor((Math.random()*10000)+ 1);

    }
    
    console.log(x);
    console.log(y);
    theaf.style.top = x + 'px';
    theaf.style.left = y + 'px';
}) 