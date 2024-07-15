function pi(){
    return 3.14;
}
function area_of_circle(radius){
    area = pi()*radius*radius;
    return area;
}
alert(area_of_circle(3));
document.getElementById("output").innerHTML = "New text";
function change_paragraph_text(){
    document.getElementById("output").innerHTML = "Prop click";
}
function change_paragraph_text(text){
    document.getElementById("output").innerHTML=text;
}
