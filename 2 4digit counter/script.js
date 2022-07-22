var next1 = document.querySelector('.box1next');
var box1 = document.querySelector('.box1');
var next2 = document.querySelector('.box2next');
var box2 = document.querySelector('.box2');
var next3 = document.querySelector('.box3next');
var box3 = document.querySelector('.box3');
var next4 = document.querySelector('.box4next');
var box4 = document.querySelector('.box4');
var next5 = document.querySelector('.box5next');
var box5 = document.querySelector('.box5');

function startcounter(){
    var start = 0;
    var end = document.querySelector('input').value;
    console.log(end);
    var start4 = start;
    var start3 = 0;
    var start2 = 0;
    var start1 = 0;
    var start5 = 0;
    var interval = setInterval(function(){
        if(start>end-1 || start > 9998){
            clearInterval(interval);
            window.alert('Counter stop');
            document.querySelector('input').value = "";
            box1.innerHTML = 0;
            box2.innerHTML = 0;
            box3.innerHTML = 0;
            box4.innerHTML = 0;
            return;
        }
        
            start4++;
            if(start4 == 10){
                start4 = 0;
            }
            next4.classList.add('animate');
            next4.innerHTML = start4;
            setTimeout(function(){
                next4.classList.remove('animate');
                box4.innerHTML = start4
            }, 700);
           
            if(start4 == 0){
                start3++;
                if(start3 == 10){
                    start3 = 0;
                }
                next3.classList.add('animate');
                next3.innerHTML = start3;
                setTimeout(function(){
                    next3.classList.remove('animate');
                    box3.innerHTML = start3;
                }, 700); 
                if(start3 == 0){
                    start2++;
                    if(start2 == 10){
                        start2 = 0;
                    }
                    next2.classList.add('animate');
                    next2.innerHTML = start2;
                    setTimeout(function(){
                        next2.classList.remove('animate');
                        box2.innerHTML = start2;
                    }, 700);
                    if(start2 == 0){
                        start1++;
                        if(start1 == 10){
                            start1 = 0;
                        }
                        next1.classList.add('animate');
                        next1.innerHTML = start1;
                        setTimeout(function(){
                            next1.classList.remove('animate');
                            box1.innerHTML = start1;
                        },700);
                        if(start1 == 0){
                            start5++;
                            next5.classList.add('animate');
                            next5.innerHTML = start5;
                            setTimeout(function(){
                                next5.classList.remove('animate');
                                box5.innerHTML = start5;
                            },700);
                        }
                    }
                }
            }

            start++;
        
    },1000);
}