function add_details(rool,name,marks){
    let box = $('ul');
    let list = $(`<li>
    
    <span>Rool No-</span>
    <span class="rool">${rool}</span>
    <span>,</span>
    <span class="name">${name}</span>
    <span>has scored</span>
    <span class="marks">${marks}</span>
    <span>marks</span>
</li>
    `);
box.append(list);
}
$('button').click(function(event){
    
    event.preventDefault();
    let roolno = $('input[type=number]#RoolNo').val();
    let name = $('input[type=text]#Name').val();
    let marks = $('input[type=number]#Marks').val();
    if(roolno && name && marks){
        add_details(roolno,name,marks); 
    
        $('input[type=number]#RoolNo').val("");
        $('input[type=text]#Name').val("");
        $('input[type=number]#Marks').val("");
        
    }else{
        alert("Please fill all the filds");
    }
    
})
