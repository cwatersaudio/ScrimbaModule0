var intBox = document.getElementById("the-box");


function changeColor (color) {
    intBox.style.backgroundColor = color;
}

intBox.addEventListener("mouseover", function(){changeColor ("blue")} )
intBox.addEventListener("mouseleave", function(){changeColor ("yellowgreen")} )
intBox.addEventListener("mousedown", function(){changeColor ("red")} )
intBox.addEventListener("mouseup", function(){changeColor ("yellow")} )
intBox.addEventListener("dblclick", function(){changeColor ("green")} )
intBox.addEventListener("scroll", function(){changeColor ("orange")} )