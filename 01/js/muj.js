/*alert("Ahoj scriptik funguje");*/
let nadpis = document.getElementById('nadpis');
let jo = document.getElementById('jo');3
let f = document.getElementById('footer');

nadpis.addEventListener('click', function(){
    nadpis.innerHTML = "ahoj <li>karle</li>";
    nadpis.style = "background-color:black; font-size:300px;" ;
    nadpis.style.fontFamily = 'fantasy';
    nadpis.classList.remove('text-uppercase');
});

jo.addEventListener('click', function(){
    jo.classList.remove('row');
    jo.style.padding = '50px';
    jo.style.backgroundColor = 'rgb(82, 89, 102)';
    jo.classList.add('text-uppercase');
    jo.style.color = 'yellow';
    jo.style.fontSize = '40px';
    jo.style.float = 'right';
    jo.style.borderRadius ='2px';
    jo.classList.remove('col-xs-12');
    jo.style.fontFamily= 'fantasy';
    jo.innerHTML = '<li>Dobrou chuť</li><img src=spekacky.jpg alt="ahoj">'
});

f.addEventListener('onmouseover',function(){
    f.innerHTML = '<img src="ricardo.jpg">'
});