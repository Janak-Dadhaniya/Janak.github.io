let String ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
   buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        String = eval(String);
        document.querySelector('input').value = String;
    }
    else if(e.target.innerHTML == 'AC'){
        String = "";
        document.querySelector('input').value = String;

    }
    else{

        console.log(e.target);
        String = String + e.target.innerHTML;
        document.querySelector('input').value = String;
    }
   })
}) 