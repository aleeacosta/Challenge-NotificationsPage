
var notiNumber = 3;
document.getElementById("noti-number").innerHTML = notiNumber;

function myFunction() {
    var element = document.getElementById('noti__card1');    
    var icon = document.getElementById("new-noti1");
    element.classList.remove("noti__card-new");    
    icon.classList.add("icon-hide");
    notiNumber = notiNumber -1;
    document.getElementById("noti-number").innerHTML = notiNumber;
    if ( notiNumber == 0 ) {
        document.getElementById('noti-number').classList.add("icon-hide");
    }
}

function myFunction2() {
    var element = document.getElementById('noti__card2');    
    var icon = document.getElementById("new-noti2");
    element.classList.remove("noti__card-new");    
    icon.classList.add("icon-hide");
    notiNumber = notiNumber -1;
    document.getElementById("noti-number").innerHTML = notiNumber;
    if ( notiNumber == 0 ) {
        document.getElementById('noti-number').classList.add("icon-hide");
    }
}

function myFunction3() {
    var element = document.getElementById('noti__card3');    
    var icon = document.getElementById("new-noti3");
    element.classList.remove("noti__card-new");    
    icon.classList.add("icon-hide");
    notiNumber = notiNumber -1;
    document.getElementById("noti-number").innerHTML = notiNumber;
    if ( notiNumber == 0 ) {
        document.getElementById('noti-number').classList.add("icon-hide");
    }
}

function markAllRead() {    
    myFunction();
    myFunction2();    
    myFunction3();    
    if ( notiNumber == 0 ) {
        document.getElementById('noti-number').classList.add("icon-hide");
    }  
}

