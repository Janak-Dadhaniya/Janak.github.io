var Progressbar = document.querySelectorAll('.skill-progress > div');

function set_width_to_zero(){
    for(let bar of Progressbar){
        bar.style.width = "0%";
    }
}
set_width_to_zero();

function is_visiable(bar){
    let skill_distance = bar.getBoundingClientRect().top;
    if(skill_distance < window.innerHeight){
        return true;
    }
    return false;
}
function fill_bar(bar){
    console.log(" fill bar called");
    let bar_length = bar.getAttribute("data-bar-width");
    let currentwidth = 0;
    let interval = setInterval(function(){
        bar.style.width = currentwidth.toString() + "%";
        if(currentwidth++ == bar_length){
            clearInterval(interval);
        }
    },10)
}
function is_filled(bar){
    
    if(parseInt(bar.style.width) != 0){
        return true;
    }
    return false;
}
function check_in_view(){
    for(let bar of Progressbar){
        if(is_visiable(bar) && !is_filled(bar)){
            console.group(" call");
            fill_bar(bar);
        }
    }
}
function again_on_top(){
    let skills = document.getElementById('skills');
    let skills_distance = skills.getBoundingClientRect().top;
    if(skills_distance > window.innerHeight){
        set_width_to_zero();
    } 
}
function checkscroll(){
    check_in_view();
    again_on_top();
}

window.addEventListener('scroll', checkscroll);


