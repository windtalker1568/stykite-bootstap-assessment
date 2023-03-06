function toggleBar(name){
    let item = document.getElementById(name);
    if(name==='open'){
        item.style.display='none'
        item = document.getElementById('close');
        item.style.display='block'
    }
    else{
        item.style.display='none'
        item = document.getElementById('open');
        item.style.display='block'
    }
}