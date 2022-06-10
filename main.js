alert("bienvenue");
var h1 = document.querySelector('h1') ;

h1.addEventListener('mouseover',fonction1);
h1.addEventListener('mousedown',fonction2);

function fonction1() {
    this.innerHTML = 'elle nous reserve plein de surprise';
    this.style.background ='orange';
    
}
function fonction2() {
   this.innerHTML = 'bravo key ';
   this.style.color ='#26d';
   this.style.fontWeight ='bold';
   this.style.fontSize ='24px';
}

var body =document.body;
var btn = document.getElementById('btn');

btn.addEventListener('click',couleur);

function couleur(){
    setTimeout((function(){body.style.backgroundColor = '#3ba'}),200);
    setTimeout((function(){body.style.backgroundColor = '#4ab'}),400);
    setTimeout((function(){body.style.backgroundColor = '#59b'}),600);
    setTimeout((function(){body.style.backgroundColor = '#66b'}),800);
    setTimeout((function(){body.style.backgroundColor = '#63b'}),1000);
    setTimeout((function(){body.style.backgroundColor = '#83a'}),1200);
    setTimeout((function(){body.style.backgroundColor = '#a3a'}),1400);
    setTimeout((function(){body.style.backgroundColor = '#a59'}),1600);
    setTimeout((function(){body.style.backgroundColor = '#a77'}),1800);s
    setTimeout((function(){body.style.backgroundColor = 'blue'}),2000);

}


var p1 = document.getElementById("idp");

p1.addEventListener("mouseover",fonction1);
p1.addEventListener("mouseover",fonction2);

function fonction1(){
   this.innerHTML = "cliquez moi maintenant";
   this.style.backgroundColor = "orange";
}

function fonction2(){
   this.innerHTML = "well done master key";
   this.style.color = "#26c";
   this.style.fontWeight = "bold";
   this.style.fontSize = "24px";
   
}




